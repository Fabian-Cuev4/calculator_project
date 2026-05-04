import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Button from "../atoms/Button.js";
import type { PokemonType } from "../../types/pokemon.js";

type PokemonDetailProps = {
  pokemon: PokemonType;
  onBackToList: () => void;
  onGoHome: () => void;
};

function PokemonDetail({ pokemon, onBackToList, onGoHome }: PokemonDetailProps) {
  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 640, mx: "auto", my: 6 }}>
      <Stack spacing={2} sx={{ alignItems: "center" }}>
        <Typography variant="h4" component="h1" sx={{ textTransform: "capitalize" }}>
          {pokemon.name}
        </Typography>

        <img src={pokemon.sprites.front_default} alt={pokemon.name} width={180} />

        <Typography>Altura: {pokemon.height}</Typography>
        <Typography>Peso: {pokemon.weight}</Typography>
        <Typography>Experiencia base: {pokemon.base_experience}</Typography>
        <Typography>
          Tipo: {pokemon.types.map((item) => item.type.name).join(", ")}
        </Typography>
        <Typography>
          Habilidades: {pokemon.abilities.map((item) => item.ability.name).join(", ")}
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button color="inherit" variant="outlined" onClick={onBackToList}>
            Volver a Pokémon
          </Button>
          <Button onClick={onGoHome}>Ir al Home</Button>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default PokemonDetail;