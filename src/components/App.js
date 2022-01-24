import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';
import Header from './Header';
import Dummy from './Dummy';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import Form from './Form';
import Footer from './Footer';
import { Route, Switch } from 'react-router-dom';
import Instructions from './Instructions';
import Options from './Options';

function App() {
  // state
  const [lastLetter, setLastLetter] = useState('');
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);

  // api
  useEffect(() => {
    callToApi().then((response) => {
      setWord(response.toLocaleLowerCase());
    });
  }, []);

  // remove accents except ñ: https://es.stackoverflow.com/a/62032
  const removeDiacriticalMarks = (text) =>
    text
      .normalize('NFD')
      .replace(
        /([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,
        '$1'
      )
      .normalize();

  // events

  const handleInput = (value) => {
    setLastLetter(value);

    if (value) {
      const matchedValue = value.toLocaleLowerCase().match('^[A-zÁ-úÄ-üñÑ]?$');

      if (matchedValue) {
        const cleanedValue = removeDiacriticalMarks(matchedValue[0]);

        const foundLetter = userLetters.find(
          (letter) => letter === cleanedValue
        );

        if (!foundLetter) {
          setUserLetters([...userLetters, cleanedValue]);
        }
      }
    }
  };

  const handleInputWord = (value) => {
    setWord(value);
    setUserLetters([]);
    setLastLetter('');
  }

  // render helpers

  const numberOfErrors = userLetters.filter(
    (letter) => !removeDiacriticalMarks(word).includes(letter)
  ).length;

  return (
    <div className="page">
      <Header />
      <main className="main">
        <section className="main__section">
          <Switch>
            <Route path="/" exact>
              <SolutionLetters
                word={word}
                userLetters={userLetters}
                removeDiacriticalMarks={removeDiacriticalMarks}
              />

              <ErrorLetters
                word={word}
                userLetters={userLetters}
                removeDiacriticalMarks={removeDiacriticalMarks}
              />

              <Form
                handleInputChange={handleInput}
                inputValue={lastLetter ? lastLetter : ''}
              />
            </Route>

            <Route path="/instructions">
              <Instructions />
            </Route>
            <Route path="/options">
              <Options handleInput={handleInputWord} value={word} />
            </Route>
          </Switch>
        </section>

        <Dummy number={numberOfErrors} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
