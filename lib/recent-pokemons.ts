"use client";

import { useEffect } from "react";

export function getRecentPokemons() {
  let recent;

  if (typeof window !== "undefined") {
    recent = JSON.parse(localStorage.getItem("recent") || "[]");
  }

  return recent || [];
}

export function addRecentPokemon(pokeName: string) {
  let recent = getRecentPokemons();

  recent = recent.filter((p: any) => p !== pokeName);

  if (recent.length >= 5) {
    recent.pop();
  }

  recent.unshift(pokeName);

  localStorage.setItem("recent", JSON.stringify(recent));
}

export function AddRecentPokemonComponent({ pokeName }: { pokeName: string }) {
  useEffect(() => {
    addRecentPokemon(pokeName);
  }, [pokeName]);
  return null;
}
