import { getSpecies, getEvolutionChainFromSpeciesName } from "@/lib/pokeapi";
import Details from "@/components/pokemons/details";
import { PokemonCard } from "@/components/pokemons/pokemon";
import { Suspense } from "react";

export default async function CatchingDetails({ poke }: { poke: any }) {
  const species = await getSpecies(poke.species.name);
  const evolution = await getEvolutionChainFromSpeciesName(poke.species.name);

  const relatedPokemons = species.varieties.map(
    (variety: { pokemon: { name: string } }) => variety.pokemon.name,
  );

  const convertEvolutionChainToList = async (chain: any) => {
    let evolutionChain = [];
    let evoData = chain;
    let lastStage = 0;

    do {
      let species = await getSpecies(evoData.species.name);
      evolutionChain.push({
        species_name: evoData.species.name,
        stage: evoData.is_baby ? lastStage : ++lastStage,
        default_pokemon: species.varieties.filter(
          (variety: { is_default: boolean }) => variety.is_default,
        )[0].pokemon.name,
      });

      evoData = evoData.evolves_to[0];
    } while (!!evoData && evoData.hasOwnProperty("evolves_to"));

    return evolutionChain;
  };

  const evolutionChain = await convertEvolutionChainToList(evolution.chain);

  return (
    <div className="flex flex-col gap-8">
      <Details poke={poke} species={species} />
    </div>
  );
}
