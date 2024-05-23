import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { removeFromFavorites } from "../store/pokemonSlice";

const FavoritesList: React.FC = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.pokemon.favorites);

  const handleRemoveFromFavorites = (id: number) => {
    dispatch(removeFromFavorites(id));
  };

  return (
    <div>
      <h1>Favorites </h1>
      <ul>
        {favorites.map((pokemon: any) => (
          <li key={pokemon.id}>
            {pokemon.name}
            <button onClick={() => handleRemoveFromFavorites(pokemon.id)}>Remove</button>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default FavoritesList;