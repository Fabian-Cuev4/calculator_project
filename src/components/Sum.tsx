import { useState } from "react";

type Props = {
  setView: (view: string) => void;
};

function Sum({ setView }: Props) {
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");

  const sum = (): void => {
    const resultado = Number(num1) + Number(num2);
    alert("Resultado: " + resultado);
  };

  return (
    <div>
      <h2>Suma</h2>

      <input
        type="number"
        value={num1}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNum1(e.target.value)
        }
      />

      <input
        type="number"
        value={num2}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNum2(e.target.value)
        }
      />

      <button onClick={sum}>Sumar</button>

      <button onClick={() => setView("home")}>
        Volver
      </button>
    </div>
  );
}

export default Sum;