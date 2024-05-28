import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { removeFromFavorites } from "../store/pokemonSlice";

import styles from '../../styles/FavoritesList.module.css';

const FavoritesList: React.FC = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.pokemon.favorites);

  const handleRemoveFromFavorites = (url: string) => {
    dispatch(removeFromFavorites(url));
  };

  return (
    <div>
      <h1>Favorites List </h1>
      <ul>
        {favorites.map((pokemon: any) => (
          <li key={pokemon.url} className={`${styles.pokemonItem} ${styles.pokemonListItem}`}>
            {pokemon.name}
            <button 
            className={styles.removeButton}
            onClick={() => handleRemoveFromFavorites(pokemon.url)}>
            Remove
            </button>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default FavoritesList;