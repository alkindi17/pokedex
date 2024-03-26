import Link from "next/link";

export default function Pokemon() {
  return (
    <div className="flex h-full min-h-screen flex-col justify-center bg-[#f5f5f5] text-center align-middle">
      <h1>Pokemon</h1>
      <Link href="/pokemons/pikachu">Pikachu</Link>
    </div>
  );
}
