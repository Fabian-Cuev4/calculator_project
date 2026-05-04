import Button from "../atoms/Button.js";
import type { PokemonType } from "../../types/pokemon.js";

type PokemonModalProps = {
  pokemon: PokemonType;
  onClose: () => void;
  onSeeDetails: (pokemon: PokemonType) => void;
};

function PokemonModal({ pokemon, onClose, onSeeDetails }: PokemonModalProps) {
  return (
    <div className="modal-background">
      <div className="modal-content">
        <Button className="modal-close" onClick={onClose}>
          X
        </Button>

        <img src={pokemon.sprites.front_default} alt={pokemon.name} />

        <h2>{pokemon.name}</h2>

        <p>Altura: {pokemon.height}</p>
        <p>Peso: {pokemon.weight}</p>

        <p>
          Tipo: {pokemon.types.map((item) => item.type.name).join(", ")}
        </p>

        <Button onClick={() => onSeeDetails(pokemon)}>Ver más</Button>
      </div>
    </div>
  );
}

export default PokemonModal;