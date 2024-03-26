import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TypeIcon from "@/components/pokemons/types-icon";
import Image from "next/image";
import Link from "next/link";
import { getPokemon } from "@/lib/pokeapi";

export async function PokemonCard({ pokeName }: { pokeName: string }) {
  const poke: any = await getPokemon(pokeName);
  return (
    <Link href={`/pokemons/${poke.name}`}>
      <Card className="cursor-pointer p-0 transition ease-in hover:bg-slate-50">
        <CardContent className="m-0 flex items-center gap-2 p-4">
          <div className="relative flex flex-1 gap-4">
            <PokemonIcon poke={poke} />
            <div className="flex flex-col">
              <p className="font-mono text-xs text-gray-400">
                {poke.species.url.split("/")[6].toString().padStart(4, "0")}
              </p>
              <p className="capitalize">{poke.name.replace(/-/g, " ")}</p>
            </div>
          </div>
          <div className="grid grid-flow-col gap-1 self-end">
            {poke.types.map((types: { type: { name: string } }) => (
              <TypeIcon
                key={types.type.name}
                type={types.type.name}
                width={25}
                height={25}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export function PokemonIcon({ poke }: { poke: any }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8e8e8]">
      <Image
        className="absolute mx-auto my-auto w-[3.3rem]"
        src={
          poke.sprites.other.home.front_default ||
          poke.sprites.other["official-artwork"].front_default ||
          poke.sprites.front_default ||
          ""
        }
        alt={poke.name}
        width={300}
        height={300}
      />
    </div>
  );
}
