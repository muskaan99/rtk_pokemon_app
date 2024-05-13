import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemon } from '../api/pokemonApi';
import { RootState } from '../store/store';
import { setPokemons, setSelectedPokemon, addToFavorites, removeFromFavorites } from '../store/pokemonSlice';
import FavoritesList from "./FavoritesList";

import styles from "./styles.module.css";

const PokemonList: React.FC = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state: RootState) => state.pokemon.pokemons);
  const favorites = useSelector((state: RootState) => state.pokemon.favorites);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemon();
        dispatch(setPokemons(data.results));
      } catch (error) {
        console.error('Failed to fetch Pokemon data error: ', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handlePokemonClick = (pokemon: any) => {
    dispatch(setSelectedPokemon(pokemon));
  };

  const handleAddToFavorites = (pokemon: any) => {
    dispatch(addToFavorites(pokemon));
  };

  const handleRemoveFromFavorites = (pokemonId: number) => {
    dispatch(removeFromFavorites(pokemonId));
  };

  return (
    <div className={styles.container}>
      <div className={styles.pokemonList}>
        <h1>Pokemon List</h1>
        <ul>
          {pokemons.map((pokemon: any) => (
            <li key={pokemon.id} onClick={() => handlePokemonClick(pokemon)}>
              {pokemon.name}
              <button className={styles.addButton} onClick={() => handleAddToFavorites(pokemon)}>Add to Favorites</button>
              <button className={styles.removeButton} onClick={() => handleRemoveFromFavorites(pokemon.id)}>Remove from Favorites</button>
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

export default PokemonList;   