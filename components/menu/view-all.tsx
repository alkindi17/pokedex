import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import Icon from "@/public/svg/pokeball2.svg";

export default function ViewAll() {
  return (
    <div className="transition hover:scale-[1.01]">
      <Link href="/pokemons/list" className="relative">
        <Card className="mx-4 mt-2 flex justify-between overflow-clip bg-[#E67F70] from-red-700 to-red-400 text-xl text-white">
          <div className="h-20">
            <div className="flex  items-center gap-2 px-3 py-2">
              <p className="text-2xl font-bold">View all pokemons</p>
              <FontAwesomeIcon icon={faSquareArrowUpRight} className="h-4" />
            </div>
          </div>
          <Icon
            className="absolute -right-2 top-0 h-32 w-32 rotate-12 opacity-15"
            fill={"white"}
          />
        </Card>
      </Link>
    </div>
  );
}
