"use client";

import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as outlineHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useToast } from "@/components/ui/use-toast";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDocument } from "react-firebase-hooks/firestore";

export default function AddToFavourite({ pokeName }: { pokeName: string }) {
  const { toast } = useToast();
  const [user, loading, error] = useAuthState(auth);
  const [isFavourite, setIsFavourite] = useState(false);
  const [favourites, setFavourites] = useState<string[]>([]);
  const [userDoc, loadingUserDoc, errorUserDoc] = useDocument(
    user ? doc(db, "users", user.uid) : undefined,
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    },
  );

  useEffect(() => {
    if (user) {
      if (userDoc) {
        const userData = userDoc.data();
        const userFavourites = userData?.favourites || [];
        setFavourites(userFavourites);
        setIsFavourite(userFavourites.includes(pokeName));
      }
    } else {
      setIsFavourite(false);
    }
  }, [user, userDoc, pokeName]);

  const handleFavourite = async () => {
    if (!user) {
      toast({
        title: "You need to sign in to add to favourites",
      });
    } else {
      if (isFavourite) {
        const userRef = doc(db, "users", user.uid);
        await setDoc(
          userRef,
          {
            favourites: favourites.filter((f) => f !== pokeName),
          },
          { merge: true },
        );
        toast({
          title: "Removed from favourites",
        });
      } else {
        const userRef = doc(db, "users", user.uid);
        await setDoc(
          userRef,
          {
            favourites: [pokeName, ...favourites],
          },
          { merge: true },
        );
        toast({
          title: "Added to favourites",
        });
      }
    }
  };

  return (
    <button
      onClick={() => {
        handleFavourite();
      }}
    >
      <FontAwesomeIcon
        icon={isFavourite ? solidHeart : outlineHeart}
        className={
          "h-8 self-end" + (isFavourite ? " text-red-500" : " text-gray-300")
        }
      />
    </button>
  );
}
