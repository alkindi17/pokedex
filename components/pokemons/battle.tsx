import BaseStats from "@/components/pokemons/base-stats";

export default function BattleDetails({ poke }: { poke: any }) {
  return (
    <>
      <BaseStats poke={poke} />
    </>
  );
}
