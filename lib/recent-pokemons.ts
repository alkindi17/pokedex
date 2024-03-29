"use client";

import { useEffect } from "react";

export function getRecentPokemons() {
  return JSON.parse(localStorage.getItem("recent") || "[]");
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
