import Link from "next/link";

export default function Pokemon() {
  return (
    <div className="flex h-full flex-col justify-center text-center align-middle">
      <h1>Pokemon</h1>
      <Link href="/pokemons/pikachu">Hello Pokemon</Link>
    </div>
  );
}
