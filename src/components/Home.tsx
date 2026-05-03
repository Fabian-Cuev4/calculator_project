type Props = {
  setView: (view: string) => void;
};

function Home({ setView }: Props) {
  return (
    <div>
      <h1>Menú principal</h1>

      <button onClick={() => setView("sum")}>
        Ir a Suma
      </button>

      <button onClick={() => setView("calculator")}>
        Ir a Calculadora
      </button>

      <button onClick={() => setView("pokemon")}>
        Ver Pokémon
      </button>
    </div>
  );
}

export default Home;