import type { PokemonType } from "../../types/pokemon.js";

type PokemonCardProps = {
  pokemon: PokemonType;
  onSelect: (pokemon: PokemonType) => void;
};

function PokemonCard({ pokemon, onSelect }: PokemonCardProps) {
  return (
    <div className="pokemon-card" onClick={() => onSelect(pokemon)}>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />

      <h2>{pokemon.name}</h2>
      <p>Experiencia base: {pokemon.base_experience}</p>
    </div>
  );
}

export default PokemonCard;