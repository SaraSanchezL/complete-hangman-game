import '../styles/App.scss';
import '../styles/core/reset.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';
import Header from './Header';
import Dummy from './Dummy';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import Form from './Form';

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

  // render helpers

  const numberOfErrors = userLetters.filter(
    (letter) => !removeDiacriticalMarks(word).includes(letter)
  ).length;

  return (
    <div className="page">
      <Header />

      <main className="main">
        <section>
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
        </section>

        <Dummy number={numberOfErrors} />
      </main>
    </div>
  );
}

export default App;
