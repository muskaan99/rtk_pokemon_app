import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { removeFromFavorites } from "../store/pokemonSlice";

import styles from '../../styles/PokemonDetails.module.css';

const FavoritesList: React.FC = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.pokemon.favorites);

  const handleRemoveFromFavorites = (url: string) => {
    dispatch(removeFromFavorites(url));
  };

  return (
    <div>
       <div className={styles.pokemonDetail}> 
       <h1 className={styles.heading}>Favorites </h1>
       <ul className={`${styles.pokemonList} ${styles.scrollableList}`}>
        {favorites.map((pokemon: any) => (
          <li key={pokemon.url} className={`${styles.pokemonItem} ${styles.pokemonListItem}`}>
            {pokemon.name}
            <button 
            className={styles.removeButton}
            onClick={() => handleRemoveFromFavorites(pokemon.url)}>
            -
            </button>
          </li>
        ))}
      </ul>
      
      </div>
    </div>
  );
};

export default FavoritesList;