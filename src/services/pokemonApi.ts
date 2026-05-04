import type { PokemonType } from "../types/pokemon.js";

type PokemonListResponse = {
  results: {
    url: string;
  }[];
};

export async function fetchPokemonCatalog(limit = 8): Promise<PokemonType[]> {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
  );
  const data: PokemonListResponse = await response.json();

  return Promise.all(
    data.results.map(async (pokemon) => {
      const detailResponse = await fetch(pokemon.url);
      return (await detailResponse.json()) as PokemonType;
    })
  );
}