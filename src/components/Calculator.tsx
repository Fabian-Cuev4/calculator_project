import { useState } from "react";

import CalculatorKeypad from "./molecules/CalculatorKeypad.js";
import type { View } from "../types/view.js";
import { applyCalculatorOperation } from "../utils/calculator.js";

type Props = {
  setView: (view: View) => void;
};

function Calculator({ setView }: Props) {
  const [display, setDisplay] = useState<string>("");
  const [valorAnterior, setValorAnterior] = useState<number | null>(null);
  const [operacion, setOperacion] = useState<
    "+" | "-" | "*" | "/" | null
  >(null);

  const agregarNumero = (num: string): void => {
    setDisplay((currentDisplay) => currentDisplay + num);
  };

  const elegirOperacion = (op: "+" | "-" | "*" | "/"): void => {
    if (display === "") return;

    setValorAnterior(Number(display));
    setOperacion(op);
    setDisplay("");
  };

  const calcular = (): void => {
    if (valorAnterior === null || display === "" || operacion === null) return;

    const actual = Number(display);
    const resultado = applyCalculatorOperation(valorAnterior, actual, operacion);

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

        <CalculatorKeypad
          onNumberPress={agregarNumero}
          onOperationPress={elegirOperacion}
          onClear={limpiar}
          onEquals={calcular}
        />

        <button onClick={() => setView("home")}>Volver</button>
      </div>
    </div>
  );
}

export default Calculator;