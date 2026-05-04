import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Button from "../atoms/Button.js";
import type { PokemonType } from "../../types/pokemon.js";

type PokemonModalProps = {
  pokemon: PokemonType;
  onClose: () => void;
  onSeeDetails: (pokemon: PokemonType) => void;
};

function PokemonModal({ pokemon, onClose, onSeeDetails }: PokemonModalProps) {
  return (
    <Dialog open onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle sx={{ textTransform: "capitalize" }}>{pokemon.name}</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ pt: 1, alignItems: "center" }}>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} width={140} />
          <Typography variant="body2">Altura: {pokemon.height}</Typography>
          <Typography variant="body2">Peso: {pokemon.weight}</Typography>
          <Typography variant="body2">
            Tipo: {pokemon.types.map((item) => item.type.name).join(", ")}
          </Typography>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button color="inherit" variant="outlined" onClick={onClose}>
          Cerrar
        </Button>
        <Button onClick={() => onSeeDetails(pokemon)}>Ver más</Button>
      </DialogActions>
    </Dialog>
  );
}

export default PokemonModal;