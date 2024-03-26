import { faMars, faVenus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export default function Details({
  poke,
  species,
}: {
  poke: any;
  species: any;
}) {
  return (
    <div>
      <h3 className="pb-2 text-xl font-bold">Details</h3>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableBody>
              {poke.species.name && (
                <TableRow>
                  <TableCell className="w-32 font-bold">Species</TableCell>
                  <TableCell className="capitalize">
                    {poke.species.name}
                  </TableCell>
                </TableRow>
              )}

              {poke.weight && (
                <TableRow>
                  <TableCell className="w-32 font-bold">Weight</TableCell>
                  <TableCell>{(poke.weight * 0.1).toFixed(1)} kg</TableCell>
                </TableRow>
              )}

              {poke.height && (
                <TableRow>
                  <TableCell className="w-32 font-bold">Height</TableCell>
                  <TableCell>{(poke.height * 10).toFixed(1)} cm</TableCell>
                </TableRow>
              )}

              {poke.base_experience && (
                <TableRow>
                  <TableCell className="w-32 font-bold">Base Exp.</TableCell>
                  <TableCell>{poke.base_experience}</TableCell>
                </TableRow>
              )}

              {species.capture_rate && (
                <TableRow>
                  <TableCell className="w-32 font-bold">Catch Rate</TableCell>
                  <TableCell>
                    {((species.capture_rate / 255) * 100).toFixed(1)}%
                  </TableCell>
                </TableRow>
              )}

              {species.egg_groups && (
                <TableRow>
                  <TableCell className="w-32 font-bold">Egg Groups</TableCell>
                  <TableCell>
                    {species.egg_groups
                      .map((group: { name: string }) => (
                        <span key={group.name} className="capitalize">
                          {group.name}
                        </span>
                      ))
                      .reduce((prev: string, curr: string) => [
                        prev,
                        ", ",
                        curr,
                      ])}
                  </TableCell>
                </TableRow>
              )}

              {species.growth_rate && (
                <TableRow>
                  <TableCell className="w-32 font-bold">Growth Rate</TableCell>
                  <TableCell className="capitalize">
                    {species.growth_rate.name}
                  </TableCell>
                </TableRow>
              )}

              {species.gender_rate && (
                <TableRow>
                  <TableCell className="w-32 font-bold">Gender Ratio</TableCell>
                  <TableCell className="flex gap-5">
                    <div className="flex items-center gap-1 text-blue-500">
                      <FontAwesomeIcon icon={faMars} className="inline w-4" />
                      <span>{((8 - species.gender_rate) / 8) * 100}% </span>
                    </div>
                    <div className="flex items-center gap-1 text-pink-400">
                      <FontAwesomeIcon icon={faVenus} className="inline w-4" />
                      <span>{(species.gender_rate / 8) * 100}%</span>
                    </div>
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
