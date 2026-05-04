import MuiTextField, { type TextFieldProps as MuiTextFieldProps } from "@mui/material/TextField";

function TextField(props: MuiTextFieldProps) {
  return <MuiTextField {...props} variant="outlined" size="small" fullWidth />;
}

export default TextField;