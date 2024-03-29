"use client";

import { SearchBox } from "react-instantsearch";

import { InstantSearchNext } from "react-instantsearch-nextjs";
import algoliasearch from "algoliasearch/lite";
import { Suspense, useState } from "react";

import CustomInfiniteHits from "@/components/algolia/CustomInfiniteHits";
import { LoadingDots } from "@/components/ui/loading";

import { usePathname } from "next/navigation";
import { getRecentPokemons } from "@/lib/recent-pokemons";
import RecentPokemons from "@/components/tabs/recent-pokemons";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID as string,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY as string,
);

export function Search() {
  const [showHits, setShowHits] = useState(false);
  const pathname = usePathname();

  if (pathname === "/pokemons/list" && !showHits) {
    setShowHits(true);
  }
  return (
    <>
      <Suspense
        fallback={
          <div className="flex h-[100dvh] items-center justify-center">
            <LoadingDots />
          </div>
        }
      >
        <InstantSearchNext indexName="pokedex" searchClient={searchClient}>
          <div className=" sticky top-0 z-10 h-36 pb-10 pt-4 gradient-mask-b-[rgba(0,0,0,1.0)_100px,rgba(0,0,0,0.8)_80%]">
            <h1 className="text-center font-title text-3xl">Pokedex</h1>
            <SearchBox
              placeholder={"Search for pokemon"}
              submitIconComponent={() => <></>}
              queryHook={(query, search) => {
                if (query.length > 0 || pathname === "/pokemons/list") {
                  setShowHits(true);
                } else {
                  setShowHits(false);
                }
                search(query);
              }}
              classNames={{
                root: "flex justify-center px-2",
                form: "w-full",
                input: "w-full border-gray-300 border rounded-md p-2",
                submit: "hidden",
                reset: "hidden",
                loadingIcon: "hidden",
              }}
            />
            <div className="absolute top-0 -z-30 h-full w-full bg-white"></div>
            <div className="before:conic-gradient absolute top-0 -z-20 h-full w-full before:pointer-events-none before:absolute before:h-[100%] before:w-[100%] before:scale-125 before:blur-xl after:absolute after:h-full after:w-full"></div>
          </div>
          {!showHits && <RecentPokemons />}
          {showHits && <CustomInfiniteHits />}
        </InstantSearchNext>
      </Suspense>
    </>
  );
}
