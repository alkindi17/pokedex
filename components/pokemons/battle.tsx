import BaseStats from "@/components/pokemons/base-stats";

export default function BattleDetails({ poke }: { poke: any }) {
  return (
    <>
      <div className="relative flex justify-between">
        <h3 className="text-xl font-bold">Base Stats</h3>
        <p className="absolute right-0 font-title text-6xl font-bold">
          {poke.stats.reduce(
            (acc: number, stat: { base_stat: number }) => acc + stat.base_stat,
            0,
          )}
        </p>
      </div>
      <BaseStats poke={poke} />
    </>
  );
}
