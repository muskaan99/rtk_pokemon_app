// to display the details of a selected pokemon

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemon } from "../api/pokemonApi";
import { RootState } from "../store/store";
import {setPokemons,setSelectedPokemon,addToFavorites,removeFromFavorites,} from "../store/pokemonSlice";
import FavoritesList from "./FavoritesList";

import styles from '../../styles/PokemonDetails.module.css';


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

  return (
    <div className={styles.container}>
       <div className={styles.pokemonDetail}> 
       <h1 className={styles.heading}>Pokemon List</h1>
       <ul className={styles.pokemonList}>
        {pokemons.map((pokemon: any) => (
          <li key={pokemon.url} className={`${styles.pokemonItem} ${styles.pokemonListItem}`}>
            <Link href={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
            <button
                className={styles.addButton}
                onClick={() => handleAddToFavorites(pokemon)}
              >
                Add
              </button>
              {/* <button
                className={styles.removeButton}
                onClick={() => handleRemoveFromFavorites(pokemon.url)}
              >
                Remove
              </button> */}
          </li>
        ))}
      </ul>
      </div>
      {/* <div className={styles.separator}></div> */}
      <div className={styles.favoritesList}>
        <FavoritesList />
      </div>
    </div>
  );
};

export default PokemonDetails;
