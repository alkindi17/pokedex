import Image from "next/image";
import React from "react";
import { useRefinementList, UseRefinementListProps } from "react-instantsearch";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

export default function CustomRefinementList({
  setShowHits,
  currentTab,
  ...props
}: UseRefinementListProps & { setShowHits: (show: boolean) => void } & {
  currentTab: string;
}) {
  const { items, refine } = useRefinementList({
    ...props,
    limit: 100,
    operator: "and",
    sortBy: ["isRefined", "name"],
  });

  return (
    <>
      <Popover
        onOpenChange={(open) => {
          if (open && currentTab === "home") {
            setShowHits(true);
          }
        }}
      >
        <PopoverTrigger asChild>
          <Button>
            <FontAwesomeIcon icon={faFilter} />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <ul className="flex flex-wrap gap-1">
            {items.map((item) => (
              <li key={item.label} className="flex-grow">
                <label
                  className={`capitalized flex cursor-pointer items-center gap-2 rounded border pr-1 hover:bg-opacity-80 has-[:checked]:bg-${item.label} has-[:checked]:text-white`}
                >
                  <div className={`h-full rounded-l p-2 bg-${item.label}`}>
                    <Image
                      src={`/pokemon-types/icons/${item.label}.svg`}
                      alt={item.label}
                      width={16}
                      height={16}
                    />
                  </div>
                  <input
                    type="checkbox"
                    className={`hidden`}
                    checked={item.isRefined}
                    onChange={() => refine(item.value)}
                  />
                  <span>{item.label}</span>
                </label>
              </li>
            ))}
          </ul>
        </PopoverContent>
      </Popover>
    </>
  );
}
