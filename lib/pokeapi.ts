import { log } from "console";

export const getPokemon = async (name: string) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return await res.json();
};

export const getSpecies = async (name: string) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
  return await res.json();
};

export const getEvolutionChainFromSpeciesName = async (name: string) => {
  const species = await getSpecies(name);
  return await fetch(species.evolution_chain.url).then((res) => res.json());
};

export const getAllPokemonTypes = async (name: string) => {
  const poke = await getPokemon(name);

  const typesUrl: string[] = poke.types.map(
    (types: { type: { url: string } }) => types.type.url,
  );

  const typesData: object[] = await Promise.all(
    typesUrl.map((url) => fetch(url).then((res) => res.json())),
  );

  return typesData;
};
