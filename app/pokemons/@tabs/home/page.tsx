"use client";
import PokeBall from "@/public/svg/pokeball.svg";

import { useHitsContext, HitsContext } from "@/lib/showHitsContext";
import CustomInfiniteHits from "@/components/algolia/CustomInfiniteHits";

import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import RecentPokemons from "@/components/tabs/recent-pokemons";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Tabs() {
  const { showHits } = useHitsContext();
  return (
    <>
      {!showHits && <div className="overflow-clip"> {<RecentPokemons />}</div>}
      {showHits && <CustomInfiniteHits />}
      <div className="transition hover:scale-[1.02]">
        <Link href="/pokemons/list" className="relative ">
          <Card className="mx-4 mt-6 flex bg-gradient-to-bl from-red-700 to-red-400 text-xl text-white">
            <div className="my-8 flex items-center gap-2 px-4">
              <FontAwesomeIcon icon={faSquareArrowUpRight} className="mr-2" />
              <p>View all pokemons</p>
            </div>
            <Image
              className="absolute -top-4 right-1"
              src="/img/pokeball.png"
              alt="pokeball"
              width={100}
              height={100}
            />
          </Card>
        </Link>
      </div>
    </>
  );
}
