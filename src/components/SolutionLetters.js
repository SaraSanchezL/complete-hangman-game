import '../styles/components/Letters.scss';

const SolutionLetters = (props) => {
  const renderSolutionLetters = () => {
    const wordLetters = props.word.split('');
    return wordLetters.map((letter, index) => {
      if (props.userLetters.includes(props.removeDiacriticalMarks(letter))) {
        return (
          <li key={index} className="letter">
            {letter}
          </li>
        );
      } else {
        return <li key={index} className="letter"></li>;
      }
    });
  };

  return (
    <div className="solution">
      <h2 className="title">Solución:</h2>
      <ul className="letters">{renderSolutionLetters()}</ul>
    </div>
  );
};

export default SolutionLetters;
