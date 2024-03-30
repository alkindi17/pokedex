"use client";

import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useTabsContext } from "@/lib/contexts";

export default function GoBack() {
  const { currentTab } = useTabsContext();

  return (
    <>
      <Link
        href={`/pokemons/${currentTab}`}
        className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#e8e8e8] px-2 pb-2 pt-2 hover:bg-[#dcdcdc] lg:hidden"
      >
        <FontAwesomeIcon icon={faAngleLeft} className="inline w-4" />
      </Link>
    </>
  );
}
