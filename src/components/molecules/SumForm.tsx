import { useState } from "react";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

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
    <Paper elevation={3} sx={{ p: 4, maxWidth: 420, mx: "auto", my: 6 }}>
      <Stack spacing={2}>
        <SectionTitle level={2}>Suma</SectionTitle>

        <Typography variant="body2" color="text.secondary">
          Ingresa dos números para ver el resultado.
        </Typography>

        <TextField
          type="number"
          label="Número 1"
          value={num1}
          onChange={(event) => setNum1(event.target.value)}
        />

        <TextField
          type="number"
          label="Número 2"
          value={num2}
          onChange={(event) => setNum2(event.target.value)}
        />

        <Button onClick={handleSum}>Sumar</Button>
        <Button color="inherit" variant="outlined" onClick={() => onNavigate("home")}>
          Volver
        </Button>
      </Stack>
    </Paper>
  );
}

export default SumForm;