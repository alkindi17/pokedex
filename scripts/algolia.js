require("dotenv").config({ path: ".env.local" });

const algoliasearch = require("algoliasearch");
const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID,
  process.env.ALGOLIA_ADMIN_API_KEY,
);

async function updatePokemonRecords() {
  const index = client.initIndex("pokedex");
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=9999");
  const data = await res.json();

  const pokemons = await Promise.all(
    data.results.map(async (poke) => {
      const pokeData = await fetch(poke.url).then((res) => res.json());
      const speciesData = await fetch(pokeData.species.url).then((res) =>
        res.json(),
      );
      return {
        objectID: pokeData.id,
        id: pokeData.id,
        national_number: speciesData.id,
        name: poke.name,
        image:
          pokeData.sprites.other.home.front_default ||
          pokeData.sprites.other["official-artwork"].front_default ||
          pokeData.sprites.front_default ||
          "",
        types: pokeData.types.map((types) => types.type.name),
      };
    }),
  );
  index.saveObjects(pokemons);
  console.log("Updated Pokemon records");
}

try {
  // updatePokemonRecords();
} catch (error) {
  console.log(error);
}
