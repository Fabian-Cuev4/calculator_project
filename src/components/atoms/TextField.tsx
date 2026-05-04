import type { InputHTMLAttributes } from "react";

function TextField(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} />;
}

export default TextField;