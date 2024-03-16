//Reference: https://redux.js.org/tutorials/essentials/part-5-async-logic


import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPokemon } from '../api/pokemonApi'
// import { selectAllPosts, fetchPosts } from './postsSlice'
import { setPokemons, setSelectedPokemon } from '../store/pokemonSlice';
import { RootState } from '../store/store';


// export const PostsList = () => {
//   const dispatch = useDispatch()
//   const posts = useSelector(selectAllPosts)
//   const postStatus = useSelector(state => state.posts.status)

export const PokemonList = () => {
    const dispatch = useDispatch();  
    const pokemons  = useSelector((state: RootState) => state.pokemon.pokemons);//why RootState??

//   useEffect(() => {
//     if (postStatus === 'idle') {
//       dispatch(fetchPosts())
//     }
//   }, [postStatus, dispatch])

//   // omit rendering logic
// }

useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemon();
        dispatch(setPokemons(data.results));
      } catch (error) {
        console.error('Failed to fetch pokemon data:', error);
      }
    };

    fetchData();
  }, [dispatch]);
}