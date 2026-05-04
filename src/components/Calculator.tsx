import { useState } from "react";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Button from "./atoms/Button.js";
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
    <Paper elevation={3} sx={{ p: 4, maxWidth: 420, mx: "auto", my: 6 }}>
      <Stack spacing={2} alignItems="center">
        <Typography variant="h5" component="h2">
          Calculadora
        </Typography>

        <Typography
          variant="h4"
          component="div"
          sx={{ width: "100%", p: 1.5, textAlign: "right", border: 1, borderColor: "divider", borderRadius: 1 }}
        >
          {display || "0"}
        </Typography>

        <CalculatorKeypad
          onNumberPress={agregarNumero}
          onOperationPress={elegirOperacion}
          onClear={limpiar}
          onEquals={calcular}
        />

        <Button color="inherit" variant="outlined" onClick={() => setView("home")}>
          Volver
        </Button>
      </Stack>
    </Paper>
  );
}

export default Calculator;