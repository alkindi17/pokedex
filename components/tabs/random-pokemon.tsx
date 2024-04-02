"use client";

import { Suspense, useEffect, useState } from "react";
import { RandomPokemonCard } from "@/components/tabs/random-pokemon-card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

export default function GenerateRandomPokemon() {
  const [allPokemons, setAllPokemons] = useState<
    { name: string; url: string }[]
  >([]);
  const [randomPokemon, setRandomPokemon] = useState<React.ReactNode>();
  const [generating, setGenerating] = useState(false);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=1118",
      );
      const data = await response.json();
      setAllPokemons(data.results);
    };

    fetchPokemons();
  }, []);

  const getRandomPokemon = () => {
    setGenerating(true);
    const randomIndex = Math.floor(Math.random() * allPokemons.length);
    setRandomPokemon(
      <RandomPokemonCard pokeName={allPokemons[randomIndex]?.name} />,
    );
    // wait for 1 second to simulate loading
    setTimeout(() => {
      setGenerating(false);
    }, 1000);
  };

  return (
    <div className="flex h-44 flex-col">
      <h2 className="mx-4 mb-2 text-xl font-bold">Random Pokemon</h2>
      <div className="mx-4">
        {!randomPokemon && !generating ? (
          <Button
            onClick={getRandomPokemon}
            className="h-[71px] w-full rounded-md border py-2 text-xl font-bold transition duration-200"
          >
            Generate
          </Button>
        ) : (
          <>
            <Skeleton
              className="h-[71px] w-full rounded-md bg-gray-300"
              hidden={!generating}
            />
            <div className="h-[71px] w-full" hidden={generating}>
              <Suspense fallback={<Skeleton className="h-[71px] w-full" />}>
                {randomPokemon}
              </Suspense>
            </div>
          </>
        )}
        {randomPokemon && (
          <Button
            onClick={getRandomPokemon}
            className="mt-4 w-full rounded py-2"
            disabled={generating}
          >
            Generate
          </Button>
        )}
      </div>
    </div>
  );
}
