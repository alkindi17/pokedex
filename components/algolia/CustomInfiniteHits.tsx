"use client";

import { useInfiniteHits } from "react-instantsearch";
import { PokemonCardForSearch } from "@/components/algolia/PokemonCard";

import { useRef, useEffect } from "react";
import { LoadingDots } from "@/components/ui/loading";

export default function CustomInfiniteHits(props: any) {
  const { hits, isLastPage, showMore } = useInfiniteHits(props);
  const sentinelRef = useRef(null);

  useEffect(() => {
    if (sentinelRef.current !== null) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLastPage) {
            showMore ? showMore() : null;
          }
        });
      });

      observer.observe(sentinelRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [isLastPage, showMore]);

  return (
    <>
      <ul className="my-4 space-y-4 px-2">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
          {hits.map((hit: any) => (
            <li key={hit.objectID}>
              <PokemonCardForSearch
                name={hit.name}
                img={hit.image}
                national_no={hit.national_number}
                types={hit.types}
              />
            </li>
          ))}
        </div>
        <li ref={sentinelRef} aria-hidden="true" />
      </ul>
      {!isLastPage && (
        <div className="flex justify-center">
          <LoadingDots />
        </div>
      )}
    </>
  );
}
