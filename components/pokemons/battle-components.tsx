import { Card, CardContent } from "../ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import TypeIcon from "./types-icon";

import { getAllPokemonTypes } from "@/lib/pokeapi";
import { log } from "console";

export function BaseStats({ poke }: { poke: any }) {
  const statAbbreviations = {
    hp: "HP",
    attack: "ATK",
    defense: "DEF",
    "special-attack": "S.ATK",
    "special-defense": "S.DEF",
    speed: "SPD",
  };

  return (
    <div>
      <div className="relative flex justify-between">
        <h3 className="text-xl font-bold">Base Stats</h3>
        <p className="absolute right-0 font-title text-6xl font-bold">
          {poke.stats.reduce(
            (acc: number, stat: { base_stat: number }) => acc + stat.base_stat,
            0,
          )}
        </p>
      </div>
      <div className="mt-2 flex flex-row justify-between">
        {poke.stats.map(
          (stat: { base_stat: number; stat: { name: string } }) => (
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
          ),
        )}
      </div>
    </div>
  );
}

export function Abilities({ poke }: { poke: any }) {
  return (
    <div>
      <h3 className="mb-2 text-xl font-bold">Abilities</h3>
      <div className="flex flex-row flex-wrap gap-2">
        {poke.abilities.map(
          (ability: { ability: { name: string }; is_hidden: Boolean }) => (
            <Card key={ability.ability.name}>
              <CardContent className="flex items-end gap-2 px-2 py-2">
                <p className="text-lg font-bold capitalize">
                  {ability.ability.name.replace(/-/g, " ")}
                </p>
                <p className="text-xs text-[#cfcccc]">
                  {ability.is_hidden ? "Hidden" : ""}
                </p>
              </CardContent>
            </Card>
          ),
        )}
      </div>
    </div>
  );
}

export async function Defense({ poke }: { poke: any }) {
  async function calculateTotalDamage(poke: any) {
    // Initialize damages object with all types and their multipliers
    let damages: { [key: string]: number[] } = {
      bug: [1, 1],
      dark: [1, 1],
      dragon: [1, 1],
      electric: [1, 1],
      fairy: [1, 1],
      fighting: [1, 1],
      fire: [1, 1],
      flying: [1, 1],
      ghost: [1, 1],
      grass: [1, 1],
      ground: [1, 1],
      ice: [1, 1],
      normal: [1, 1],
      poison: [1, 1],
      psychic: [1, 1],
      rock: [1, 1],
      steel: [1, 1],
      water: [1, 1],
    };

    const typesData = await getAllPokemonTypes(poke.name);

    typesData.forEach((data: any) => {
      data.damage_relations.double_damage_from.forEach(
        (double: { name: string }) => {
          damages[double.name][typesData.indexOf(data)] = 2;
        },
      );
      data.damage_relations.half_damage_from.forEach(
        (half: { name: string }) => {
          damages[half.name][typesData.indexOf(data)] = 0.5;
        },
      );
      data.damage_relations.no_damage_from.forEach((no: { name: string }) => {
        damages[no.name][typesData.indexOf(data)] = 0;
      });
    });

    const totalDamages = Object.entries(damages).map(([key, value]) => {
      return { key: key, value: value[0] * value[1] };
    });

    return totalDamages;
  }

  const damages = await calculateTotalDamage(poke);

  return (
    <div>
      <h3 className="mb-2 text-xl font-bold">Taking Damage</h3>
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableBody>
              {damages.some(
                (damage: { value: number }) => damage.value === 4,
              ) && (
                <TableRow>
                  <TableCell className="w-8 text-xl font-bold">4×</TableCell>
                  <TableCell className="flex flex-wrap gap-1 capitalize">
                    {damages
                      .filter((damage: { value: number }) => damage.value === 4)
                      .map((damage: { key: string }) => (
                        <TypeIcon
                          key={damage.key}
                          type={damage.key}
                          width={25}
                          height={25}
                        />
                      ))}
                  </TableCell>
                </TableRow>
              )}
              {damages.some(
                (damage: { value: number }) => damage.value === 2,
              ) && (
                <TableRow>
                  <TableCell className="w-8 text-xl font-bold">2×</TableCell>
                  <TableCell className="flex flex-wrap gap-1 capitalize">
                    {damages
                      .filter((damage: { value: number }) => damage.value === 2)
                      .map((damage: { key: string }) => (
                        <TypeIcon
                          key={damage.key}
                          type={damage.key}
                          width={25}
                          height={25}
                        />
                      ))}{" "}
                  </TableCell>
                </TableRow>
              )}
              {damages.some(
                (damage: { value: number }) => damage.value === 1,
              ) && (
                <TableRow>
                  <TableCell className="w-8 text-xl font-bold">1×</TableCell>
                  <TableCell className="flex flex-wrap gap-1 capitalize">
                    {damages
                      .filter((damage: { value: number }) => damage.value === 1)
                      .map((damage: { key: string }) => (
                        <TypeIcon
                          key={damage.key}
                          type={damage.key}
                          width={25}
                          height={25}
                        />
                      ))}{" "}
                  </TableCell>
                </TableRow>
              )}
              {damages.some(
                (damage: { value: number }) => damage.value === 0.5,
              ) && (
                <TableRow>
                  <TableCell className="w-8 text-xl font-bold">½×</TableCell>
                  <TableCell className="flex flex-wrap gap-1 capitalize">
                    {damages
                      .filter(
                        (damage: { value: number }) => damage.value === 0.5,
                      )
                      .map((damage: { key: string }) => (
                        <TypeIcon
                          key={damage.key}
                          type={damage.key}
                          width={25}
                          height={25}
                        />
                      ))}{" "}
                  </TableCell>
                </TableRow>
              )}
              {damages.some(
                (damage: { value: number }) => damage.value === 0.25,
              ) && (
                <TableRow>
                  <TableCell className="w-8 text-xl font-bold">¼×</TableCell>
                  <TableCell className="flex flex-wrap gap-1 capitalize">
                    {damages
                      .filter(
                        (damage: { value: number }) => damage.value === 0.25,
                      )
                      .map((damage: { key: string }) => (
                        <TypeIcon
                          key={damage.key}
                          type={damage.key}
                          width={25}
                          height={25}
                        />
                      ))}{" "}
                  </TableCell>
                </TableRow>
              )}
              {damages.some(
                (damage: { value: number }) => damage.value === 0,
              ) && (
                <TableRow>
                  <TableCell className="w-8 text-xl font-bold">0×</TableCell>
                  <TableCell className="flex flex-wrap gap-1 capitalize">
                    {damages
                      .filter((damage: { value: number }) => damage.value === 0)
                      .map((damage: { key: string }) => (
                        <TypeIcon
                          key={damage.key}
                          type={damage.key}
                          width={25}
                          height={25}
                        />
                      ))}{" "}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
