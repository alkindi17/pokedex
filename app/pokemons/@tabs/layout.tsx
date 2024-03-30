"use client";

import { SearchBox, InstantSearch } from "react-instantsearch";
import algoliasearch from "algoliasearch/lite";
import { Suspense, useState, useCallback } from "react";
import { LoadingDots } from "@/components/ui/loading";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { showHitsProvider, useTabsContext } from "@/lib/contexts";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID as string,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY as string,
);

export default function TabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showHits, setShowHits] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const { currentTab } = useTabsContext();

  return (
    <div className=" overflow-clip">
      <Suspense
        fallback={
          <div className="flex h-[100dvh] items-center justify-center">
            <LoadingDots />
          </div>
        }
      >
        <InstantSearch indexName="pokedex" searchClient={searchClient}>
          <div className="sticky top-0 z-10 h-36 pb-10 pt-4 gradient-mask-b-[rgba(0,0,0,1.0)_100px,rgba(0,0,0,0.8)_80%]">
            <div className="relative mx-4 my-2 flex items-center justify-between">
              {((currentTab === "home" && showHits) ||
                currentTab !== "home") && (
                <Link
                  href="/pokemons/home"
                  onClick={() => setShowHits(false)}
                  className="absolute mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white bg-opacity-40 px-2 pb-2 pt-2 hover:bg-opacity-50"
                >
                  <FontAwesomeIcon icon={faAngleLeft} className="inline w-4" />
                </Link>
              )}
              <h1 className="flex-1 text-center font-title text-3xl">
                Pokedex
              </h1>
            </div>
            <SearchBox
              placeholder={"Search for pokemon"}
              submitIconComponent={() => <></>}
              queryHook={useCallback(
                (query: string, search: Function) => {
                  setSearchQuery(query);
                  if (query.length > 0 && currentTab === "home") {
                    setShowHits(true);
                  } else {
                    setShowHits(false);
                  }
                  search(query);
                },
                // eslint-disable-next-line react-hooks/exhaustive-deps
                [currentTab, showHits],
              )}
              classNames={{
                root: "flex justify-center px-2",
                form: "w-full relative",
                input: "w-full border-gray-300 border rounded-md p-2",
                submit: "hidden",
                reset:
                  "bg-white rounded-full px-2 py-2 absolute absolute right-2 top-2",
                loadingIcon: "hidden",
              }}
            />
            <div className="absolute top-0 -z-30 h-full w-full bg-white"></div>
            <div className="before:conic-gradient absolute top-0 -z-20 h-full w-full before:pointer-events-none before:absolute before:h-[100%] before:w-[100%] before:scale-125 before:blur-xl after:absolute after:h-full after:w-full"></div>
          </div>
          <showHitsProvider.Provider value={{ showHits, setShowHits }}>
            {children}
          </showHitsProvider.Provider>
        </InstantSearch>
      </Suspense>
    </div>
  );
}
