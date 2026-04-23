import { useState } from "react";

function Calculator({ setView }) {
  const [display, setDisplay] = useState("");
  const [valorAnterior, setValorAnterior] = useState(null);
  const [operacion, setOperacion] = useState(null);

  const agregarNumero = (num) => {
    setDisplay(display + num);
  };

  const elegirOperacion = (op) => {
    if (display === "") return;

    setValorAnterior(Number(display));
    setOperacion(op);
    setDisplay("");
  };

  const calcular = () => {
    if (valorAnterior === null || display === "") return;

    const actual = Number(display);
    let resultado;

    if (operacion === "+") resultado = valorAnterior + actual;
    if (operacion === "-") resultado = valorAnterior - actual;
    if (operacion === "*") resultado = valorAnterior * actual;
    if (operacion === "/") resultado = valorAnterior / actual;

    setDisplay(String(resultado));
    setValorAnterior(null);
    setOperacion(null);
  };

  const limpiar = () => {
    setDisplay("");
    setValorAnterior(null);
    setOperacion(null);
  };

  return (
    <div className="container">
      <div className="calculator">
        <h2>Calculadora</h2>

        <input value={display} readOnly />

        <div style={gridStyle}>
          {[7,8,9].map(n => (
            <button key={n} onClick={() => agregarNumero(n.toString())}>{n}</button>
          ))}
          <button onClick={() => elegirOperacion("/")}>/</button>

          {[4,5,6].map(n => (
            <button key={n} onClick={() => agregarNumero(n.toString())}>{n}</button>
          ))}
          <button onClick={() => elegirOperacion("*")}>*</button>

          {[1,2,3].map(n => (
            <button key={n} onClick={() => agregarNumero(n.toString())}>{n}</button>
          ))}
          <button onClick={() => elegirOperacion("-")}>-</button>

          <button onClick={() => agregarNumero("0")}>0</button>
          <button onClick={limpiar}>C</button>
          <button onClick={calcular}>=</button>
          <button onClick={() => elegirOperacion("+")}>+</button>
        </div>

        <button onClick={() => setView("home")}>Volver</button>
      </div>
    </div>
  );
}

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 60px)",
  gap: "5px",
  marginTop: "10px"
};



export default Calculator;