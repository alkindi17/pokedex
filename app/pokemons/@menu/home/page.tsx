"use client";

import { useHitsContext } from "@/lib/contexts";
import CustomInfiniteHits from "@/components/algolia/CustomInfiniteHits";
import RecentPokemons from "@/components/menu/recent-pokemons";
import FavouritePokemons from "@/components/menu/favourite-pokemons";
import GenerateRandomPokemon from "@/components/menu/random-pokemon";
import ViewAll from "@/components/menu/view-all";

export default function Menu() {
  const { showHits } = useHitsContext();
  return (
    <>
      {showHits && <CustomInfiniteHits />}
      {!showHits && (
        <div className="mb-10 space-y-6">
          <ViewAll />
          <div className="overflow-clip"> {<RecentPokemons />}</div>
          <div className="overflow-clip"> {<FavouritePokemons />}</div>
          <GenerateRandomPokemon />
        </div>
      )}
    </>
  );
}
