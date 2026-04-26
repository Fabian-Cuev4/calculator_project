import { useEffect, useState } from "react";

function Pokemon({ setView }) {
  // Local state for list data, search input, and selected/detail views.
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [detailPokemon, setDetailPokemon] = useState(null);

  // Fetch initial Pokemon list once when the component mounts.
  useEffect(() => {
    getPokemons();
  }, []);

  // Load a limited list and then fetch full details for each Pokemon.
  const getPokemons = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=8");
    const data = await response.json();

    const pokemonDetails = await Promise.all(
      data.results.map(async (pokemon) => {
        const detailResponse = await fetch(pokemon.url);
        return await detailResponse.json();
      })
    );

    setPokemons(pokemonDetails);
  };

  // Client-side filter by Pokemon name.
  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  // Open/close the quick-view modal card.
  const openModal = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const closeModal = () => {
    setSelectedPokemon(null);
  };

  // Switch from modal preview to full detail page.
  const openDetailPage = (pokemon) => {
    setSelectedPokemon(null);
    setDetailPokemon(pokemon);
  };

  // Return from detail page to the list grid.
  const backToPokemonList = () => {
    setDetailPokemon(null);
  };

  // Dedicated detail-page render branch.
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
          {detailPokemon.types
            .map((item) => item.type.name)
            .join(", ")}
        </p>

        <p>
          Habilidades:{" "}
          {detailPokemon.abilities
            .map((item) => item.ability.name)
            .join(", ")}
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

  // Main list view with search, cards, and modal.
  return (
    <div className="pokemon-page">
      <h1>Pokémon API</h1>

      <input
        className="pokemon-search"
        type="text"
        placeholder="Buscar Pokémon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="pokemon-grid">
        {/* Pokemon card grid rendered from filtered results. */}
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
        // Modal shown when a Pokemon is selected from the grid.
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