function Home({ setView }) {
    
  return (

    <div>
      <h1>Menú principal</h1>

      <button onClick={() => setView("sum")}>
        Ir a Suma
      </button>

      <button onClick={() => setView("calculator")}>
        Ir a Calculadora
      </button>
    </div>
    
  );
}

export default Home;