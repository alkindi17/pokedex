export default function BaseStats({ poke }: { poke: any }) {
  const statAbbreviations = {
    hp: "HP",
    attack: "ATK",
    defense: "DEF",
    "special-attack": "S.ATK",
    "special-defense": "S.DEF",
    speed: "SPD",
  };

  return (
    <div className="mt-2 flex flex-row justify-between">
      {poke.stats.map((stat: { base_stat: number; stat: { name: string } }) => (
        <div key={stat.stat.name} className="flex flex-col items-center">
          <div
            className={`h-20 w-9 overflow-hidden rounded-md bg-${poke.types[0].type.name}`}
          >
            <div
              className="w-full bg-[#e8e8e8]"
              style={{ height: `${((255 - stat.base_stat) / 255) * 100}%` }}
            ></div>
          </div>
          <p className="mt-2 text-center text-sm font-bold">
            {
              statAbbreviations[
                stat.stat.name as keyof typeof statAbbreviations
              ]
            }
          </p>
          <p className="text-center text-xs font-bold text-gray-400">
            {stat.base_stat}
          </p>
        </div>
      ))}
    </div>
  );
}
