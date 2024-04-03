"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { getPokemon } from "@/lib/pokeapi";
import TypeIcon from "@/components/pokemons/types-icon";
import { PokemonIcon } from "@/components/pokemons/pokemon";
import { useRoutesContext } from "@/lib/contexts";
import { useState, useEffect } from "react";
import { PokemonCard } from "@/components/pokemons/pokemon";

export function RandomPokemonCard({ pokeName }: { pokeName: string }) {
  const [poke, setPoke] = useState<any>();

  const { setCurrentRoute } = useRoutesContext();

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await getPokemon(pokeName);
      setPoke(data);
    };
    fetchPokemon();
  }, [pokeName]);

  return (
    <>
      {poke && (
        <Link
          href={`/pokemons/${poke.name}`}
          onClick={() => {
            setCurrentRoute("pokemon");
          }}
        >
          <PokemonCard pokeName={pokeName} />
        </Link>
      )}
    </>
  );
}
