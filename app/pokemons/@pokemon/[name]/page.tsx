import Image from "next/image";
import TypeIcon from "@/components/pokemons/types-icon";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BattleDetails from "@/components/pokemons/battle";
import CatchingDetails from "@/components/pokemons/catching";
export const dynamicParams = false;

export async function generateStaticParams() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=9999");
  const pokemons = await (await res).json();

  return pokemons.results.map((pokemon: { name: string }) => ({
    params: { name: pokemon.name },
  }));
}

const getPokemon = async (name: string) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return await res.json();
};

export default async function Pokemon({
  params,
}: {
  params: { name: string };
}) {
  let poke: any;
  let typeName: string = "";

  try {
    await getPokemon(params.name.toLowerCase()).then((data) => {
      poke = data;
      typeName = poke.types[0].type.name;
    });
  } catch (error) {
    return (
      <div className="flex h-full flex-col justify-center text-center align-middle">
        <h1>Pokemon not found</h1>
      </div>
    );
  }

  return (
    <div className="bg-[#f5f5f5]">
      <div className="flex h-fit flex-col overflow-hidden max-md:w-screen">
        <div
          className={`h-[40rem] -translate-y-[19rem] -skew-y-[10deg] bg-gradient-to-r from-[transparent] from-25% max-sm:h-[50rem] max-sm:-translate-y-[25rem] max-sm:-skew-y-[10deg] to-${typeName} px-32 py-20 max-lg:px-8 max-lg:py-6 max-md:px-8 max-md:py-8`}
        >
          <div className="relative flex h-[22rem] translate-y-[19rem] skew-y-[10deg] flex-col justify-between align-middle max-sm:translate-y-[25rem] max-sm:skew-y-[10deg]">
            <div className="flex flex-1 justify-between">
              <div className="flex flex-col gap-1">
                {poke.types.map((types: { type: { name: string } }) => (
                  <TypeIcon key={types.type.name} type={types.type.name} />
                ))}
              </div>
              <div className="font-mono text-2xl text-white max-md:text-lg">
                <p className="origin-bottom rotate-90">
                  {poke.id.toString().padStart(4, "0")}
                </p>
              </div>
            </div>
            <h1 className="font-title text-7xl capitalize max-md:text-6xl max-sm:translate-y-16">
              {poke.name}
            </h1>
            <div className="absolute -z-10 flex h-full w-full -translate-y-10 items-start justify-end max-sm:mt-5 max-sm:items-center max-sm:justify-center">
              <div className="w-[330px] max-sm:w-[360px]">
                <Image
                  src={poke.sprites.other.home.front_default}
                  alt={poke.name}
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="-translate-y-[15rem] px-32 py-20 max-lg:px-8 max-lg:py-6 max-md:px-8 max-md:py-8 max-sm:-translate-y-[22rem]">
        <Tabs defaultValue="battle" className="xl:hidden">
          <TabsList className="mb-8 grid w-full grid-cols-2">
            <TabsTrigger value="battle">Battle</TabsTrigger>
            <TabsTrigger value="catching">Catching</TabsTrigger>
          </TabsList>
          <TabsContent value="battle">
            <BattleDetails poke={poke} />
          </TabsContent>
          <TabsContent value="catching">
            <CatchingDetails poke={poke} />
          </TabsContent>
        </Tabs>

        <div className="flex flex-row gap-6 max-xl:hidden">
          <div className="flex-1">
            <BattleDetails poke={poke} />
          </div>
          <div className="flex-1">
            <CatchingDetails poke={poke} />
          </div>
        </div>
      </div>
    </div>
  );
}
