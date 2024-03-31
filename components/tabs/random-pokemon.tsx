"use client";

import { useEffect, useState } from "react";
import { PokemonCard } from "@/components/pokemons/random-pokemon-card";
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
    // wait for 1 second to simulate loading
    setTimeout(
      () => {
        setRandomPokemon(
          <PokemonCard pokeName={allPokemons[randomIndex]?.name} />,
        );
        setGenerating(false);
      },
      !randomPokemon ? 1000 : 1000,
    );
  };

  return (
    <div className="flex h-36 flex-col">
      <h2 className="mx-4 mb-2 text-xl font-bold">Random Pokemon</h2>
      <div className="mx-4">
        {!randomPokemon && !generating ? (
          <Button
            onClick={getRandomPokemon}
            className="h-[71px] w-full rounded-md border py-2 text-xl font-bold transition duration-200"
            disabled={generating}
          >
            Generate
          </Button>
        ) : generating ? (
          <Skeleton className="h-[71px] w-full rounded-md bg-gray-300" />
        ) : (
          <div className="h-[71px] w-full">{randomPokemon}</div>
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
