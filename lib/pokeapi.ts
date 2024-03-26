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
