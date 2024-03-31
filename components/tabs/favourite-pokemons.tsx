"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";

export default function FavouritePokemons() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className="mx-4 flex h-36 flex-col">
      <h2 className="mb-2 text-xl font-bold">Favourites</h2>

      {loading
        ? ""
        : user
          ? "Your Favourites"
          : "Sign in to view your favourite pokemons"}
    </div>
  );
}
