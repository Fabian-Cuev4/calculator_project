import { useState } from "react";

type Props = {
  setView: (view: string) => void;
};

function Calculator({ setView }: Props) {
  const [display, setDisplay] = useState<string>("");
  const [valorAnterior, setValorAnterior] = useState<number | null>(null);
  const [operacion, setOperacion] = useState<string | null>(null);

  const agregarNumero = (num: string): void => {
    setDisplay(display + num);
  };

  const elegirOperacion = (op: string): void => {
    if (display === "") return;

    setValorAnterior(Number(display));
    setOperacion(op);
    setDisplay("");
  };

  const calcular = (): void => {
    if (valorAnterior === null || display === "" || operacion === null) return;

    const actual = Number(display);
    let resultado: number;

    if (operacion === "+") resultado = valorAnterior + actual;
    else if (operacion === "-") resultado = valorAnterior - actual;
    else if (operacion === "*") resultado = valorAnterior * actual;
    else if (operacion === "/") resultado = valorAnterior / actual;
    else return;

    setDisplay(String(resultado));
    setValorAnterior(null);
    setOperacion(null);
  };

  const limpiar = (): void => {
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
          {[7, 8, 9].map((n) => (
            <button key={n} onClick={() => agregarNumero(n.toString())}>
              {n}
            </button>
          ))}
          <button onClick={() => elegirOperacion("/")}>/</button>

          {[4, 5, 6].map((n) => (
            <button key={n} onClick={() => agregarNumero(n.toString())}>
              {n}
            </button>
          ))}
          <button onClick={() => elegirOperacion("*")}>*</button>

          {[1, 2, 3].map((n) => (
            <button key={n} onClick={() => agregarNumero(n.toString())}>
              {n}
            </button>
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

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 60px)",
  gap: "5px",
  marginTop: "10px",
};

export default Calculator;