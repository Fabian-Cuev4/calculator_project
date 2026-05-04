import type { CSSProperties } from "react";

import Button from "../atoms/Button.js";
import type { CalculatorOperation } from "../../utils/calculator.js";

type CalculatorKeypadProps = {
  onNumberPress: (value: string) => void;
  onOperationPress: (operation: CalculatorOperation) => void;
  onClear: () => void;
  onEquals: () => void;
};

const keypadGridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 60px)",
  gap: "5px",
  marginTop: "10px",
};

function CalculatorKeypad({
  onNumberPress,
  onOperationPress,
  onClear,
  onEquals,
}: CalculatorKeypadProps) {
  return (
    <div style={keypadGridStyle}>
      {[7, 8, 9].map((value) => (
        <Button key={value} onClick={() => onNumberPress(value.toString())}>
          {value}
        </Button>
      ))}
      <Button onClick={() => onOperationPress("/")}>/</Button>

      {[4, 5, 6].map((value) => (
        <Button key={value} onClick={() => onNumberPress(value.toString())}>
          {value}
        </Button>
      ))}
      <Button onClick={() => onOperationPress("*")}>*</Button>

      {[1, 2, 3].map((value) => (
        <Button key={value} onClick={() => onNumberPress(value.toString())}>
          {value}
        </Button>
      ))}
      <Button onClick={() => onOperationPress("-")}>-</Button>

      <Button onClick={() => onNumberPress("0")}>0</Button>
      <Button onClick={onClear}>C</Button>
      <Button onClick={onEquals}>=</Button>
      <Button onClick={() => onOperationPress("+")}>+</Button>
    </div>
  );
}

export default CalculatorKeypad;