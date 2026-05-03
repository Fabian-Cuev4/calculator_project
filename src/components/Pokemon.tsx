import { useEffect, useState } from "react";

type Props = {
  setView: (view: string) => void;
};

// Tipos mínimos necesarios (solo lo que usas)
type PokemonType = {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
    };
  }[];
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
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=8");
    const data = await response.json();

    const pokemonDetails: PokemonType[] = await Promise.all(
      data.results.map(async (pokemon: { url: string }) => {
        const detailResponse = await fetch(pokemon.url);
        return await detailResponse.json();
      })
    );

    setPokemons(pokemonDetails);
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
      <div className="pokemon-page">
        <h1>{detailPokemon.name}</h1>

        <img
          className="pokemon-detail-image"
          src={detailPokemon.sprites.front_default}
          alt={detailPokemon.name}
        />

        <p>Altura: {detailPokemon.height}</p>
        <p>Peso: {detailPokemon.weight}</p>
        <p>Experiencia base: {detailPokemon.base_experience}</p>

        <p>
          Tipo:{" "}
          {detailPokemon.types.map((item) => item.type.name).join(", ")}
        </p>

        <p>
          Habilidades:{" "}
          {detailPokemon.abilities.map((item) => item.ability.name).join(", ")}
        </p>

        <button onClick={backToPokemonList}>
          Volver a Pokémon
        </button>

        <button onClick={() => setView("home")}>
          Ir al Home
        </button>
      </div>
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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
      />

      <div className="pokemon-grid">
        {filteredPokemons.map((pokemon) => (
          <div
            className="pokemon-card"
            key={pokemon.id}
            onClick={() => openModal(pokemon)}
          >
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
            />

            <h2>{pokemon.name}</h2>
            <p>Experiencia base: {pokemon.base_experience}</p>
          </div>
        ))}
      </div>

      <button onClick={() => setView("home")}>
        Volver al Home
      </button>

      {selectedPokemon && (
        <div className="modal-background">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              X
            </button>

            <img
              src={selectedPokemon.sprites.front_default}
              alt={selectedPokemon.name}
            />

            <h2>{selectedPokemon.name}</h2>

            <p>Altura: {selectedPokemon.height}</p>
            <p>Peso: {selectedPokemon.weight}</p>

            <p>
              Tipo:{" "}
              {selectedPokemon.types
                .map((item) => item.type.name)
                .join(", ")}
            </p>

            <button onClick={() => openDetailPage(selectedPokemon)}>
              Ver más
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pokemon;