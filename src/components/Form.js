const Form = (props) => {
  const handleInputValue = (event) => {
    props.handleInputChange(event.currentTarget.value);
  };

  return (
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
        value={props.inputValue}
        onChange={handleInputValue}
      />
    </form>
  );
};

export default Form;
