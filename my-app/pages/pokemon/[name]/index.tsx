import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

type Props = {};

const Pokemon = (props: Props) => {
  const [pokemon, setPokemon] = React.useState<any | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  //get the name of the pokemon from the url
  //use the name to fetch the pokemon details
  //display the details of the pokemon
  const router = useRouter();

  const pokeName = router.query.name;
  console.log(pokeName);

  useEffect(() => {
    if (pokeName) {
      const fetchData = async () => {
        try {
          const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokeName}`
          );
          const data = await res.json();
          console.log("in use effect", data);
          setPokemon(data);
        } catch (error) {
          console.error("Failed to fetch Pokemon data:", error);
        }
      };
      const data = fetchData();
    }
    setLoading(false);
  }, [pokeName]);
  return (
    <div>
      {loading && pokemon ? (
        <div>Loading ...</div>
      ) : (
        <div>
          <div>{pokemon?.name}</div>
          <div>
            <img src={pokemon?.sprites?.front_default} alt={pokemon?.name} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Pokemon;
