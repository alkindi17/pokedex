"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { getPokemon } from "@/lib/pokeapi";
import TypeIcon from "@/components/pokemons/types-icon";
import { PokemonIcon } from "@/components/pokemons/pokemon";
import { Suspense } from "react";
import { useRoutesContext } from "@/lib/contexts";
import { useState, useEffect } from "react";

export function PokemonCard({ pokeName }: { pokeName: string }) {
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
            setCurrentRoute(poke.name);
          }}
        >
          <Card className="cursor-pointer p-0 transition ease-in hover:bg-slate-50">
            <CardContent className="m-0 flex items-center gap-2 p-4">
              <div className="relative flex flex-1 gap-4">
                <PokemonIcon poke={poke} />
                <div className="flex flex-col">
                  <p className="font-mono text-xs text-gray-400">
                    {poke.species.url.split("/")[6].toString().padStart(4, "0")}
                  </p>
                  <p className="capitalize">{poke.name.replace(/-/g, " ")}</p>
                </div>
              </div>
              <div className="grid grid-flow-col gap-1 self-end">
                {poke.types.map((types: { type: { name: string } }) => (
                  <TypeIcon
                    key={types.type.name}
                    type={types.type.name}
                    width={25}
                    height={25}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </Link>
      )}
    </>
  );
}
