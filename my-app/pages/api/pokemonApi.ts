//API:https://pokeapi.co/api/v2/

 const fetchPokemon = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20');
    if (!response.ok) {
      throw new Error('Failed to fetch Pokemon data');
    }
    return response.json();
  }

  module.exports = { fetchPokemon };