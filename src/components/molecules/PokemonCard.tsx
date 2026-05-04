import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import type { PokemonType } from "../../types/pokemon.js";

type PokemonCardProps = {
  pokemon: PokemonType;
  onSelect: (pokemon: PokemonType) => void;
};

function PokemonCard({ pokemon, onSelect }: PokemonCardProps) {
  return (
    <Card elevation={2}>
      <CardActionArea onClick={() => onSelect(pokemon)}>
        <CardMedia
          component="img"
          image={pokemon.sprites.front_default}
          alt={pokemon.name}
          sx={{ width: 120, mx: "auto", pt: 2 }}
        />
        <CardContent>
          <Typography variant="h6" component="h2" sx={{ textTransform: "capitalize" }}>
            {pokemon.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Experiencia base: {pokemon.base_experience}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PokemonCard;