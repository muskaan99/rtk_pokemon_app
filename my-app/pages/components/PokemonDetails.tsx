// to display the details of a selected pokemon

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemon } from "../api/pokemonApi";
import { RootState } from "../store/store";
import {
  setPokemons,
  setSelectedPokemon,
  addToFavorites,
  removeFromFavorites,
} from "../store/pokemonSlice";
import FavoritesList from "./FavoritesList";

import styles from "../../styles/PokemonDetails.module.css";

import Link from "next/link";

const PokemonDetails: React.FC = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state: RootState) => state.pokemon.pokemons);
  const favorites = useSelector((state: RootState) => state.pokemon.favorites);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemon();
        dispatch(setPokemons(data.results));
      } catch (error) {
        console.error("Failed to fetch Pokemon data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleAddToFavorites = (pokemon: any) => {
    dispatch(addToFavorites(pokemon));
  };

  const handleRemoveFromFavorites = (pokemonUrl: string) => {
    dispatch(removeFromFavorites(pokemonUrl));
  };

  const arrayTest = Array.from({ length: 100 }, (_, i) => i + 1);

  return (
    // <div
    //   style={{
    //     display: "flex",
    //     flexDirection: "row",
    //     width: "80%",
    //     height: "80%",
    //     border: "1px solid black",
    //   }}
    // >
    //   <div
    //     style={{
    //       display: "flex",
    //       flexDirection: "column",
    //       width: "50%",
    //       height: "100%",
    //       border: "1px solid black",
    //     }}
    //   >
    //     <div
    //       style={{
    //         display: "flex",
    //         flexDirection: "row",
    //         justifyContent: "space-between",
    //         width: "100%",
    //         height: "10%",
    //         border: "1px solid black",
    //       }}
    //     >
    //       Header
    //     </div>
    //     <div style={{
    //       display: "flex",
    //       flexDirection: "column",
    //       width: "100%",
    //       height: "90%",
    //       border: "1px solid black",
    //       overflow: "auto",
    //     }}>
    //       {arrayTest.map((i) => (
    //         <div
    //           key={i}
    //           style={{
    //             display: "flex",
    //             flexDirection: "row",
    //             justifyContent: "space-between",
    //             width: "100%",
    //             height: "10%",
    //             border: "1px solid black",
    //           }}
    //         >
    //           <div
    //             style={{
    //               display: "flex",
    //               flexDirection: "row",
    //               justifyContent: "space-between",
    //               width: "100%",
    //               height: "10%",
    //               border: "1px solid black",
    //             }}
    //           >
    //             Pokemon Name
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    //   <div
    //     style={{
    //       display: "flex",
    //       flexDirection: "column",
    //       width: "50%",
    //       height: "100%",
    //       border: "1px solid black",
    //     }}
    //   >
    //     <div
    //       style={{
    //         display: "flex",
    //         flexDirection: "row",
    //         justifyContent: "space-between",
    //         width: "100%",
    //         height: "10%",
    //         border: "1px solid black",
    //       }}
    //     >
    //       Header
    //     </div>
    //     Favorites
    //   </div>

    // </div>
    <div className={styles.container}>
      <div className={styles.pokemonDetail}>
        <h1 className={styles.heading}>Pokemon List</h1>
        <ul className={`${styles.pokemonList} ${styles.scrollableList}`}>
          {pokemons.map((pokemon: any) => (
            <li
              key={pokemon.url}
              className={`${styles.pokemonItem} ${styles.pokemonListItem}`}
            >
              <Link href={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
              <button
                className={styles.addButton}
                onClick={() => handleAddToFavorites(pokemon)}
              >
                +
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.favoritesList}>
        <FavoritesList />
      </div>
    </div>
  );
};

export default PokemonDetails;
