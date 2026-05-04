import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Button from "../atoms/Button.js";
import SectionTitle from "../atoms/SectionTitle.js";
import type { View } from "../../types/view.js";

type NavigationMenuProps = {
  onNavigate: (view: View) => void;
};

function NavigationMenu({ onNavigate }: NavigationMenuProps) {
  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Stack spacing={2}>
          <SectionTitle level={1}>Menú principal</SectionTitle>

          <Typography variant="body1" color="text.secondary">
            Elige una sección.
          </Typography>

          <Button onClick={() => onNavigate("sum")}>Ir a Suma</Button>
          <Button onClick={() => onNavigate("calculator")}>Ir a Calculadora</Button>
          <Button onClick={() => onNavigate("pokemon")}>Ver Pokémon</Button>
        </Stack>
      </Paper>
    </Container>
  );
}

export default NavigationMenu;