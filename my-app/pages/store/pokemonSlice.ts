// pages/store/pokemonSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Pokemon {
  // id: number;
  name: string;
  url: string;    
  // will add more properties when required
}

interface PokemonState {
  pokemons: Pokemon[];
  selectedPokemon: Pokemon | null;
  favorites: Pokemon[];
}

export const initialState: PokemonState = {
  pokemons: [],
  selectedPokemon: null,
  favorites: [],
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemons(state, action: PayloadAction<Pokemon[]>) {
      state.pokemons = action.payload;
    },
    setSelectedPokemon(state, action: PayloadAction<Pokemon>) {
      state.selectedPokemon = action.payload;
    },
    addToFavorites(state, action: PayloadAction<Pokemon>) {
      const existingPokemon = state.favorites.find(pokemon => pokemon.url  === action.payload.url );
      if (!existingPokemon) {
        state.favorites.push(action.payload); 
      }
    },
    removeFromFavorites(state, action: PayloadAction<string>) {
      state.favorites = state.favorites.filter(pokemon => pokemon.url !== action.payload);
    },
  },
});

//action
export const { setPokemons, setSelectedPokemon,addToFavorites, removeFromFavorites } = pokemonSlice.actions;
//reducers
export default pokemonSlice.reducer;
