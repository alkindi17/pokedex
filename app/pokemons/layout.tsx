"use client";

import { useSelectedLayoutSegment } from "next/navigation";

export default function Layout({
  children,
  pokemon,
  tabs,
}: {
  children: React.ReactNode;
  pokemon: React.ReactNode;
  tabs: React.ReactNode;
}) {
  const PokemonSegment = useSelectedLayoutSegment("pokemon");

  return (
    <div className="flex h-[100dvh]">
      {children}
      <div
        className={`w-min-96 h-[100dvh] w-96 overflow-auto border-r bg-[#f5f5f5] max-lg:w-full ${
          PokemonSegment === "children" ? "max-lg:hidden" : ""
        }`}
      >
        {tabs}
      </div>
      <div
        className={`h-full flex-1 overflow-auto  ${
          PokemonSegment !== "children" ? "max-lg:hidden" : ""
        }`}
      >
        {pokemon}
      </div>
    </div>
  );
}
