"use client";

import { useHitsContext } from "@/lib/contexts";
import CustomInfiniteHits from "@/components/algolia/CustomInfiniteHits";

import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import RecentPokemons from "@/components/tabs/recent-pokemons";
import FavouritePokemons from "@/components/tabs/favourite-pokemons";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import Image from "next/image";

import GenerateRandomPokemon from "@/components/tabs/random-pokemon";

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
        <div className="space-y-6">
          <div className="overflow-clip"> {<RecentPokemons />}</div>
          <div className="overflow-clip"> {<FavouritePokemons />}</div>
          <GenerateRandomPokemon />

          <div className="pt-4 transition hover:scale-[1.01]">
            <Link href="/pokemons/list" className="relative">
              <Card className="mx-4 mt-6 flex bg-gradient-to-bl from-red-700 to-red-400 text-xl text-white">
                <div className="my-7 flex items-center gap-2 px-4">
                  <FontAwesomeIcon
                    icon={faSquareArrowUpRight}
                    className="mr-2"
                  />
                  <p>View all pokemons</p>
                </div>
                <Image
                  className="absolute -top-4 right-1"
                  src="/img/pokeball.png"
                  alt="pokeball"
                  width={70}
                  height={70}
                />
              </Card>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
