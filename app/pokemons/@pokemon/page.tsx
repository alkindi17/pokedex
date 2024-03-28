import Link from "next/link";
import PokeBall from "@/public/svg/pokeball.svg";

export default function Pokemon() {
  return (
    <div className="flex h-full flex-col justify-center bg-[#f5f5f5] align-middle">
      <PokeBall className="mx-auto h-96 w-96 opacity-5" />
    </div>
  );
}
