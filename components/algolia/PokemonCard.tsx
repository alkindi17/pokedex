import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import TypeIcon from "@/components/pokemons/types-icon";
import { usePathname } from "next/navigation";
import { useRoutesContext } from "@/lib/contexts";

export function PokemonCardForSearch({ img, name, national_no, types }: any) {
  const pathname = usePathname();
  const { setCurrentRoute } = useRoutesContext();
  return (
    <Link
      href={`/pokemons/${name}`}
      onClick={() => {
        setCurrentRoute("pokemon");
      }}
    >
      <Card
        className={`cursor-pointer p-0 transition ease-in hover:bg-slate-50 ${pathname === `/pokemons/${name}` ? "lg:border lg:border-slate-300 lg:bg-slate-200 lg:hover:bg-slate-200" : ""}`}
      >
        <CardContent className="m-0 flex items-center gap-2 p-4">
          <div className="relative flex flex-1 gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8e8e8]">
              <Image
                className="absolute mx-auto my-auto w-[3.3rem]"
                src={img}
                alt={name}
                width={300}
                height={300}
              />
            </div>
            <div className="flex flex-col">
              <p className="font-mono text-xs text-gray-400">
                {national_no.toString().padStart(4, "0")}
              </p>
              <p className="capitalize">{name.replace(/-/g, " ")}</p>
            </div>
          </div>
          <div className="grid grid-flow-col gap-1 self-end">
            {types.map((type: string) => (
              <TypeIcon key={type} type={type} width={25} height={25} />
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
