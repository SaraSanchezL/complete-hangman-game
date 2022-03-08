import '../styles/components/instructions.scss';

const Instructions = () => {
  return (
    <section className="instructions">
      <p>
        Modo Un Jugador: se obtendrá una palabra aleatoria de un servidor para adivinar en la pantalla principal 'A Jugar'.
      </p>
      <p>
        Modo Multijugador: un jugador en la pestaña 'Palabra a Adivinar' escribirá la palabra que un segundo jugador adivinará en la pantalla principal 'A Jugar'.
      </p>
    </section>
  );
};

export default Instructions;
