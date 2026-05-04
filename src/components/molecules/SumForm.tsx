import { useState } from "react";

import Button from "../atoms/Button.js";
import SectionTitle from "../atoms/SectionTitle.js";
import TextField from "../atoms/TextField.js";
import type { View } from "../../types/view.js";

type SumFormProps = {
  onNavigate: (view: View) => void;
};

function SumForm({ onNavigate }: SumFormProps) {
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");

  const handleSum = (): void => {
    const result = Number(num1) + Number(num2);
    alert("Resultado: " + result);
  };

  return (
    <div>
      <SectionTitle level={2}>Suma</SectionTitle>

      <TextField
        type="number"
        value={num1}
        onChange={(event) => setNum1(event.target.value)}
      />

      <TextField
        type="number"
        value={num2}
        onChange={(event) => setNum2(event.target.value)}
      />

      <Button onClick={handleSum}>Sumar</Button>

      <Button onClick={() => onNavigate("home")}>Volver</Button>
    </div>
  );
}

export default SumForm;