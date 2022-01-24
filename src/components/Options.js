import '../styles/components/Options.scss';

const Options = (props) => {

  const handleForm = (ev) => ev.preventDefault();

  const handleChange = (ev) => {
    props.handleInput(ev.target.value);
  }

  return (
    <section className="options">
      <p>Estas son las opciones del juego</p>
      <form onSubmit={handleForm}>
  <label className="title" htmlFor="word">
    Escribe aquí la palabra que hay que adivinar:
  </label>
  <input
    autoFocus
    autoComplete="off"
    className="form__input"
    maxLength="15"
    type="text"
    id="word"
    name="word"
    onChange = {handleChange}
    value={props.value}
  />
</form>
    </section>

  
  );
};

export default Options;
