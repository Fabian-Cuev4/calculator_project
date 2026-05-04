import MuiButton, { type ButtonProps as MuiButtonProps } from "@mui/material/Button";

function Button(props: MuiButtonProps) {
  return <MuiButton variant="contained" disableElevation {...props} />;
}

export default Button;