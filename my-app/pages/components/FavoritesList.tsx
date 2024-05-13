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
      <h2>Favorites List</h2>
      <ul>
        {favorites.map((pokemon: any) => (
          <li key={pokemon.id}>
            {pokemon.name}
            <button onClick={() => handleRemoveFromFavorites(pokemon.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => alert("Test button clicked")}>Test</button> {/* Test button */}
    </div>
  );
};

export default FavoritesList;