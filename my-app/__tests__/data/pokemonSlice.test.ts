import  { setPokemons, setSelectedPokemon,addToFavorites,removeFromFavorites } from '../../pages/store/pokemonSlice';
import reducer, { initialState } from '../../pages/store/pokemonSlice';

//TEST: ACTIONS
describe('pokemonSlice actions', () => {
    it('will create an action to set pokemons', () => {
      const pokemons = [{ url:"https://pokeapi.co/api/v2/pokemon/25/", name: 'Pikachu' }, 
                        { url:"https://pokeapi.co/api/v2/pokemon/39/", name: 'Jigglypuff' }
                      ];
      const expectedAction = {
        type: 'pokemon/setPokemons',
        payload: pokemons,
      };
      expect(setPokemons(pokemons)).toEqual(expectedAction);
    });
  
    it('will create an action to set selected pokemon', () => {
      const pokemon = { url:"https://pokeapi.co/api/v2/pokemon/25/", name: 'Pikachu' };
      const expectedAction = {
        type: 'pokemon/setSelectedPokemon',
        payload: pokemon,
      };
      expect(setSelectedPokemon(pokemon)).toEqual(expectedAction);
    });  
});


//TEST: REDUCER

describe('pokemonSlice reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: 'dummy_action' })).toEqual(initialState);
  });

  it('should handle setPokemons', () => {
    const pokemons = [
      { url: "https://pokeapi.co/api/v2/pokemon/25/", name: 'Pikachu' },
      { url: "https://pokeapi.co/api/v2/pokemon/39/", name: 'Jigglypuff' }
    ];
    const nextState = reducer(initialState, setPokemons(pokemons));
    expect(nextState.pokemons).toEqual(pokemons);
  });

  it('should handle setSelectedPokemon', () => {
    const pokemon = { url: "https://pokeapi.co/api/v2/pokemon/25/", name: 'Pikachu' };
    const nextState = reducer(initialState, setSelectedPokemon(pokemon));
    expect(nextState.selectedPokemon).toEqual(pokemon);
  });

  it('should handle addToFavorites', () => {
    const pokemon = { url: "https://pokeapi.co/api/v2/pokemon/25/", name: 'Pikachu' };
    const nextState = reducer(initialState, addToFavorites(pokemon));
    expect(nextState.favorites).toContainEqual(pokemon);
  });

  it('should handle removeFromFavorites', () => {
    const initialStateWithFavorites = {
      ...initialState,
      favorites: [
        { url: "https://pokeapi.co/api/v2/pokemon/25/", name: 'Pikachu' },
        { url: "https://pokeapi.co/api/v2/pokemon/39/", name: 'Jigglypuff' }
      ]
    };
    const nextState = reducer(initialStateWithFavorites, removeFromFavorites("https://pokeapi.co/api/v2/pokemon/25/"));
    expect(nextState.favorites).not.toContainEqual({ url: "https://pokeapi.co/api/v2/pokemon/25/", name: 'Pikachu' });
  });
});
