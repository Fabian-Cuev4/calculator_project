import Button from "../atoms/Button.js";
import SectionTitle from "../atoms/SectionTitle.js";
import type { View } from "../../types/view.js";

type NavigationMenuProps = {
  onNavigate: (view: View) => void;
};

function NavigationMenu({ onNavigate }: NavigationMenuProps) {
  return (
    <div>
      <SectionTitle level={1}>Menú principal</SectionTitle>

      <Button onClick={() => onNavigate("sum")}>Ir a Suma</Button>

      <Button onClick={() => onNavigate("calculator")}>Ir a Calculadora</Button>

      <Button onClick={() => onNavigate("pokemon")}>Ver Pokémon</Button>
    </div>
  );
}

export default NavigationMenu;