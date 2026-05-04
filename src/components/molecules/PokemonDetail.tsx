import Button from "../atoms/Button.js";
import type { PokemonType } from "../../types/pokemon.js";

type PokemonDetailProps = {
  pokemon: PokemonType;
  onBackToList: () => void;
  onGoHome: () => void;
};

function PokemonDetail({ pokemon, onBackToList, onGoHome }: PokemonDetailProps) {
  return (
    <div className="pokemon-page">
      <h1>{pokemon.name}</h1>

      <img
        className="pokemon-detail-image"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />

      <p>Altura: {pokemon.height}</p>
      <p>Peso: {pokemon.weight}</p>
      <p>Experiencia base: {pokemon.base_experience}</p>

      <p>Tipo: {pokemon.types.map((item) => item.type.name).join(", ")}</p>

      <p>
        Habilidades: {pokemon.abilities.map((item) => item.ability.name).join(", ")}
      </p>

      <Button onClick={onBackToList}>Volver a Pokémon</Button>

      <Button onClick={onGoHome}>Ir al Home</Button>
    </div>
  );
}

export default PokemonDetail;