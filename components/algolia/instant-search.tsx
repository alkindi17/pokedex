"use client";

import { SearchBox } from "react-instantsearch";

import { InstantSearchNext } from "react-instantsearch-nextjs";
import algoliasearch from "algoliasearch/lite";
import { Suspense } from "react";
import { PokemonCardForSearch } from "@/components/algolia/PokemonCard";

import CustomInfiniteHits from "@/components/algolia/CustomInfiniteHits";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID as string,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY as string,
);

export function Search() {
  function Hit({ hit }: { hit: any }) {
    return (
      <PokemonCardForSearch
        name={hit.name}
        img={hit.image}
        national_no={hit.national_number}
        types={hit.types}
      />
    );
  }

  return (
    <>
      <Suspense>
        <InstantSearchNext indexName="pokedex" searchClient={searchClient}>
          <div className="sticky top-0 z-10 pb-10 pt-4 gradient-mask-b-[rgba(0,0,0,1.0)_100px,rgba(0,0,0,0.8)_80%]">
            <h1 className="text-center font-title text-3xl">Pokedex</h1>
            <SearchBox
              placeholder={"Search for pokemon"}
              submitIconComponent={() => <></>}
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
          <CustomInfiniteHits
            future={{
              preserveSharedStateOnUnmount: true,
            }}
          />
        </InstantSearchNext>
      </Suspense>
    </>
  );
}
