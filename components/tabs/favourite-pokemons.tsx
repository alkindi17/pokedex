"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/lib/firebase";
import { doc } from "firebase/firestore";
import { Suspense, useEffect, useState } from "react";
import { PokemonIconByName } from "@/components/pokemons/pokemon";
import Link from "next/link";
import { LoadingDots } from "../ui/loading";
import { useDocument } from "react-firebase-hooks/firestore";
import { useRoutesContext } from "@/lib/contexts";

export default function FavouritePokemons() {
  const [favouritesComponent, setFavouritesComponent] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const { setCurrentRoute } = useRoutesContext();

  const [userDoc, loadingUserDoc, errorUserDoc] = useDocument(
    user ? doc(db, "users", user.uid) : undefined,
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    },
  );

  useEffect(() => {
    if (userDoc && !loadingUserDoc) {
      const getUserData = async () => {
        const userData = userDoc.data();
        const favourites = userData?.favourites || [];

        const pc = favourites.map((pokemon: string) => (
          <li key={pokemon} className="hover:scale-105">
            <Link
              href={`/pokemons/${pokemon}`}
              onClick={() => {
                setCurrentRoute("pokemon");
              }}
            >
              <PokemonIconByName pokeName={pokemon} width={6} height={6} />
            </Link>
          </li>
        ));
        setFavouritesComponent(pc);
      };
      getUserData();
      setMounted(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDoc, loadingUserDoc]);

  return (
    <div className="flex h-36 flex-col">
      <h2 className="mx-4 mb-2 text-xl font-bold">Favourites</h2>

      {loading && !user ? (
        <LoadingDots />
      ) : user ? (
        loadingUserDoc && !userDoc ? (
          <LoadingDots />
        ) : mounted ? (
          favouritesComponent.length > 0 ? (
            <Suspense fallback={<LoadingDots />}>
              <div className="flex flex-wrap">
                <ul className="no-scrollbar flex h-28 items-center space-x-4 overflow-x-scroll px-4">
                  {favouritesComponent}
                </ul>
              </div>
            </Suspense>
          ) : (
            <p className="px-4">You don&apos;t have any favourite pokemons</p>
          )
        ) : (
          <LoadingDots />
        )
      ) : (
        <p className="px-4">Sign in to view your favourites</p>
      )}
    </div>
  );
}
