import  { setPokemons, setSelectedPokemon } from '../pages/store/pokemonSlice';
import reducer, { initialState } from '../pages/store/pokemonSlice';

//TEST: ACTIONS
describe('pokemonSlice actions', () => {
    it('will create an action to set pokemons', () => {
      const pokemons = [{ id: 1, name: 'Pikachu' }, { id: 2, name: 'Charmander' }];
      const expectedAction = {
        type: 'pokemon/setPokemons',
        payload: pokemons,
      };
      expect(setPokemons(pokemons)).toEqual(expectedAction);
    });
  
    it('will create an action to set selected pokemon', () => {
      const pokemon = { id: 1, name: 'Pikachu' };
      const expectedAction = {
        type: 'pokemon/setSelectedPokemon',
        payload: pokemon,
      };
      expect(setSelectedPokemon(pokemon)).toEqual(expectedAction);
    });  
});


//TEST: REDUCER


// describe('pokemonSlice reducer', () => {
//     it('return the initial state', () => {
//       expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState);
//     });
  
//     it('handle setPokemons', () => {
//       const pokemons = [{ id: 1, name: 'Pikachu' }];
//       const nextState = reducer(initialState, setPokemons(pokemons));
//       expect(nextState.pokemons).toEqual(pokemons);
//     });
  
//     it('handle setSelectedPokemon', () => {
//       const selectedPokemon = { id: 1, name: 'Pikachu' };
//       const nextState = reducer(initialState, setSelectedPokemon(selectedPokemon));
//       expect(nextState.selectedPokemon).toEqual(selectedPokemon);
//     });
//   });
