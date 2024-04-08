//API:https://pokeapi.co/api/v2/

export async function fetchPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    if (!response.ok) {
      throw new Error('Failed to fetch Pokemon data');
    }
    return response.json();
  }