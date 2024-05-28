/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from '../../pages/store/pokemonSlice';
import PokemonDetails from '../../pages/components/PokemonDetails';

const renderWithRedux = (component: React.ReactElement) => {
  const store = configureStore({
    reducer: {
      pokemon: pokemonReducer,
    },
  });
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe('PokemonDetails component', () => {
  it('renders Add and Remove buttons for each Pokémon', async () => {
    renderWithRedux(<PokemonDetails />);

    // checking if  buttons are rendered
    const addButtons = await screen.findAllByText(/add/i);
    const removeButtons = await screen.findAllByText(/remove/i);

    expect(addButtons.length).toBeGreaterThan(0);
    expect(removeButtons.length).toBeGreaterThan(0);

    // buttons  in the document or not
    addButtons.forEach(button => {
      expect(button).toBeInTheDocument();
    });
    removeButtons.forEach(button => {
        expect(button).toBeInTheDocument();
      });
    });
  });
