// pokemonApi.test.ts

import { fetchPokemon } from '../pages/api/pokemonApi';

//Test fetch pokemon to check APi call
describe('fetchPokemon', () => {
    it('fetches Pokemon data from the API', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({
          results: [
            { name: 'spearow', url: 'https://pokeapi.co/api/v2/pokemon/21/' },
            { name: 'fearow', url: 'https://pokeapi.co/api/v2/pokemon/22/' },
            { name: 'ekans', url: 'https://pokeapi.co/api/v2/pokemon/23/' },
            { name: 'arbok', url: 'https://pokeapi.co/api/v2/pokemon/24/' },
            { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' },
            { name: 'raichu', url: 'https://pokeapi.co/api/v2/pokemon/26/' },
            { name: 'sandshrew', url: 'https://pokeapi.co/api/v2/pokemon/27/' },
            { name: 'sandslash', url: 'https://pokeapi.co/api/v2/pokemon/28/' },
            { name: 'nidoran-f', url: 'https://pokeapi.co/api/v2/pokemon/29/' },
            { name: 'nidorina', url: 'https://pokeapi.co/api/v2/pokemon/30/' },
            { name: 'nidoqueen', url: 'https://pokeapi.co/api/v2/pokemon/31/' },
            { name: 'nidoran-m', url: 'https://pokeapi.co/api/v2/pokemon/32/' },
            { name: 'nidorino', url: 'https://pokeapi.co/api/v2/pokemon/33/' },
            { name: 'nidoking', url: 'https://pokeapi.co/api/v2/pokemon/34/' },
            { name: 'clefairy', url: 'https://pokeapi.co/api/v2/pokemon/35/' },
            { name: 'clefable', url: 'https://pokeapi.co/api/v2/pokemon/36/' },
            { name: 'vulpix', url: 'https://pokeapi.co/api/v2/pokemon/37/' },
            { name: 'ninetales', url: 'https://pokeapi.co/api/v2/pokemon/38/' },
            { name: 'jigglypuff', url: 'https://pokeapi.co/api/v2/pokemon/39/' },
            { name: 'wigglytuff', url: 'https://pokeapi.co/api/v2/pokemon/40/' }
          ]
        }),
      });
  
      const pokemonData = await fetchPokemon();
  
      expect(pokemonData.results.length).toBe(20);
      expect(pokemonData.results[0].name).toBe('spearow');
      expect(pokemonData.results[19].name).toBe('wigglytuff');
    });
  
    it('throws an error when failed to fetch data', async () => {
      global.fetch = jest.fn().mockResolvedValue({ ok: false });
  
      await expect(fetchPokemon()).rejects.toThrow('Failed to fetch Pokemon data');
    });
  });