import NavigationMenu from "./molecules/NavigationMenu.js";
import type { View } from "../types/view.js";

type Props = {
  setView: (view: View) => void;
};

function Home({ setView }: Props) {
  return <NavigationMenu onNavigate={setView} />;
}

export default Home;