import {
  Abilities,
  BaseStats,
  Defense,
} from "@/components/pokemons/battle-components";

export default function BattleDetails({ poke }: { poke: any }) {
  return (
    <div className="flex flex-col gap-8">
      <Abilities poke={poke} />
      <Defense poke={poke} />
      <BaseStats poke={poke} />
    </div>
  );
}
