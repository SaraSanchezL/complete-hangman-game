import '../styles/App.scss';
import '../styles/core/reset.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';
import Header from './Header';
import Dummy from './Dummy';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';

function App() {
  const [lastLetter, setLastLetter] = useState('');
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);

  useEffect(() => {
    callToApi().then((response) => {
      setWord(response);
    });
  }, []);

  const handleInput = (event) => {
    let inputValue = event.target.value;
    setLastLetter(inputValue);

    if (inputValue) {
      inputValue = event.target.value
        .toLocaleLowerCase()
        .match('^[A-zÁ-úÄ-üñÑ]?$'); //^[a-zA-ZñÑ]?$

      if (inputValue) {
        const foundLetter = userLetters.find(
          (letter) => letter === inputValue[0]
        );

        if (!foundLetter) {
          setUserLetters([...userLetters, inputValue[0]]);
        }
      }
    }
  };

  const numberOfErrors = userLetters.filter(
    (letter) => !word.includes(letter)
  ).length;

  return (
    <div className="page">
      <Header />

      <main className="main">
        <section>
          <SolutionLetters word={word} userLetters={userLetters} />

          <ErrorLetters word={word} userLetters={userLetters} />

          <form className="form">
            <label className="title" htmlFor="last-letter">
              Escribe una letra:
            </label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              value={lastLetter ? lastLetter : ''}
              onChange={handleInput}
            />
          </form>
        </section>

        <Dummy number={numberOfErrors} />
      </main>
    </div>
  );
}

export default App;
