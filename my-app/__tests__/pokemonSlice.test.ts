// import { setPokemons, setSelectedPokemon } from '../pages/store/pokemonSlice';
// import pokemonReducer, { initialState } from '../pages/store/pokemonSlice';


// describe('pokemonSlice', () => {
//     // test  setPokemons 
//     describe('setPokemons', () => {
//         it('should set the list of pokemons', () => {
//             const pokemons = [{ id: 1, name: 'Pikachu' }, { id: 2, name: 'Charmander' }];//test
//             const action = setPokemons(pokemons);
//             const expectedState = { ...initialState, pokemons };
//             // const
//             expect(pokemonReducer(initialState, action)).toEqual(expectedState);// verify
//         });
//     });

//      // testing the setSelectedPokemon 
//      describe('setSelectedPokemon', () => {
//         it('should set the selected pokemon', () => {
//             const selectedPokemon = { id: 1, name: 'Pikachu' };
//             const action = setSelectedPokemon(selectedPokemon);
//             const expectedState = { ...initialState, selectedPokemon };
//             expect(pokemonReducer(initialState, action)).toEqual(expectedState);
//         });
//     });
// });