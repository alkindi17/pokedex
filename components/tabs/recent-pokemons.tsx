"use client";

import { getRecentPokemons } from "@/lib/recent-pokemons";
import { Suspense, useEffect, useState } from "react";
import { PokemonIconByName } from "@/components/pokemons/pokemon";
import Link from "next/link";
import { LoadingDots } from "../ui/loading";

export default function RecentPokemons() {
  const [recentPokemonsComponents, setRecentPokemonsComponents] = useState<
    string[]
  >([]);

  useEffect(() => {
    const pokemons = getRecentPokemons();
    const pc = pokemons.map((pokemon: string) => (
      <li key={pokemon} className="hover:scale-105">
        <Link
          href={`/pokemons/${pokemon}`}
          onClick={() => {
            console.log("clicked");
          }}
        >
          <PokemonIconByName pokeName={pokemon} width={6} height={6} />
        </Link>
      </li>
    ));
    setRecentPokemonsComponents(pc);
  }, []);

  if (!recentPokemonsComponents.length) return null;

  return (
    <div className="flex h-36 flex-col">
      <h2 className="mb-2 px-4 text-xl font-bold">Recently viewed</h2>
      <Suspense fallback={<LoadingDots />}>
        <ul className="flex h-28 items-center space-x-4 overflow-x-scroll px-4">
          {recentPokemonsComponents}
        </ul>
      </Suspense>
    </div>
  );
}
