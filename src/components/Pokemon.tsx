import { useEffect, useState } from "react";

import PokemonCard from "./molecules/PokemonCard.js";
import PokemonDetail from "./molecules/PokemonDetail.js";
import PokemonModal from "./molecules/PokemonModal.js";
import { fetchPokemonCatalog } from "../services/pokemonApi.js";
import type { PokemonType } from "../types/pokemon.js";
import type { ChangeEvent } from "react";
import type { View } from "../types/view.js";

type Props = {
  setView: (view: View) => void;
};

function Pokemon({ setView }: Props) {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);
  const [search, setSearch] = useState<string>("");
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonType | null>(null);
  const [detailPokemon, setDetailPokemon] = useState<PokemonType | null>(null);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async (): Promise<void> => {
    const pokemonCatalog = await fetchPokemonCatalog();
    setPokemons(pokemonCatalog);
  };

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  const openModal = (pokemon: PokemonType): void => {
    setSelectedPokemon(pokemon);
  };

  const closeModal = (): void => {
    setSelectedPokemon(null);
  };

  const openDetailPage = (pokemon: PokemonType): void => {
    setSelectedPokemon(null);
    setDetailPokemon(pokemon);
  };

  const backToPokemonList = (): void => {
    setDetailPokemon(null);
  };

  if (detailPokemon) {
    return (
      <PokemonDetail
        pokemon={detailPokemon}
        onBackToList={backToPokemonList}
        onGoHome={() => setView("home")}
      />
    );
  }

  return (
    <div className="pokemon-page">
      <h1>Pokémon API</h1>

      <input
        className="pokemon-search"
        type="text"
        placeholder="Buscar Pokémon..."
        value={search}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
      />

      <div className="pokemon-grid">
        {filteredPokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onSelect={openModal}
          />
        ))}
      </div>

      <button onClick={() => setView("home")}>
        Volver al Home
      </button>

      {selectedPokemon && (
        <PokemonModal
          pokemon={selectedPokemon}
          onClose={closeModal}
          onSeeDetails={openDetailPage}
        />
      )}
    </div>
  );
}

export default Pokemon;