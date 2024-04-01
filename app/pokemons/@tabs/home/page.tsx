"use client";

import { useHitsContext } from "@/lib/contexts";
import CustomInfiniteHits from "@/components/algolia/CustomInfiniteHits";
import RecentPokemons from "@/components/tabs/recent-pokemons";
import FavouritePokemons from "@/components/tabs/favourite-pokemons";
import GenerateRandomPokemon from "@/components/tabs/random-pokemon";
import ViewAll from "@/components/tabs/view-all";

export default function Tabs() {
  const { showHits } = useHitsContext();
  return (
    <>
      {showHits && (
        <CustomInfiniteHits
          future={{
            preserveSharedStateOnUnmount: true,
          }}
        />
      )}
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
