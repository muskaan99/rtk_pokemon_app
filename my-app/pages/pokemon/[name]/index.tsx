import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styled from "styled-components";

type Props = {};

const PokemonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 70%;
  border: 1px solid black;
  box-shadow: 0 10 10px rgba(77, 77, 77, 0.589);
  border-radius: 10px;
  background: linear-gradient(45deg, #050505 0%,#0505054a ,#05050566 70%, #f7f6f6 100%);
  color: black;
  overflow: auto;
`;

const ListContainer = styled.div`
 
  height: 80%;
  width: max-content;
  padding: 10px;
  margin: 10px;
  border: 1px solid black;
  box-shadow: 0 10 10px rgba(77, 77, 77, 0.589);
  border-radius: 10px;
  background: linear-gradient(45deg, #050505 0%,#0505054a ,#05050566 70%, #f7f6f6 100%);
  color: black;
  overflow: auto;
`;

const Pokemon = (props: Props) => {
  const [pokemon, setPokemon] = React.useState<any | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  // const
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
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {loading && pokemon ? (
        <div>Loading ...</div>
      ) : (
        <PokemonContainer>
          <div>{pokemon?.name}</div>
          <ListContainer>
            {pokemon?.types.map((type: any, index: number) => (
              <div key={index}>{type.type.name}</div>
            ))}
          </ListContainer>
          <ListContainer>
            {pokemon?.abilities?.map((ability: any, index: number) => (
              <div key={index + 1000}>{ability.ability.name}</div>
            ))}
          </ListContainer>
          <ListContainer>
            {pokemon?.moves.map((move: any, index: number) => (
              <div key={index + 10000}>{move.move.name}</div>
            ))}
          </ListContainer>

          <div>
            <img src={pokemon?.sprites?.front_default} alt={pokemon?.name} />
          </div>
        </PokemonContainer>
      )}
    </div>
  );
};

export default Pokemon;
