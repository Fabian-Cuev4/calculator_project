export type CalculatorOperation = "+" | "-" | "*" | "/";

export function applyCalculatorOperation(
  previousValue: number,
  currentValue: number,
  operation: CalculatorOperation
): number {
  switch (operation) {
    case "+":
      return previousValue + currentValue;
    case "-":
      return previousValue - currentValue;
    case "*":
      return previousValue * currentValue;
    case "/":
      return previousValue / currentValue;
  }
}