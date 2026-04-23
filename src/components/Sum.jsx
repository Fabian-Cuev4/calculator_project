import { useState } from "react";

function Sum({ setView }) {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const sum = () => {
    const resultado = Number(num1) + Number(num2);
    alert("Resultado: " + resultado);
  };

  return (
    <div>
      <h2>Suma</h2>

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <button onClick={sum}>Sumar</button>

      <button onClick={() => setView("home")}>
        Volver
      </button>
    </div>
  );
}

export default Sum;