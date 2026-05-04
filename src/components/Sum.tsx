import SumForm from "./molecules/SumForm.js";
import type { View } from "../types/view.js";

type Props = {
  setView: (view: View) => void;
};

function Sum({ setView }: Props) {
  return <SumForm onNavigate={setView} />;
}

export default Sum;