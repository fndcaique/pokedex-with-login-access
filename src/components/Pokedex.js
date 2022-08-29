import PropTypes from 'prop-types';
import React from 'react';

import { pokemonType } from '../types';
import Button from './Button';
import Pokemon from './Pokemon';

import '../styles/pokedex.css';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonIndex: 0,
      filteredType: 'all',
    };
    this.nextPokemon = this.nextPokemon.bind(this);
    this.filterPokemon = this.filterPokemon.bind(this);
    this.fetchFilteredPokemon = this.fetchFilteredPokemon.bind(this);
  }

  nextPokemon(numberOfPokemon) {
    this.setState((state) => ({
      pokemonIndex: (state.pokemonIndex + 1) % numberOfPokemon,
    }));
  }

  filterPokemon(filteredType) {
    this.setState({ filteredType, pokemonIndex: 0 });
  }

  fetchFilteredPokemon() {
    const { pokemonList } = this.props;
    const { filteredType } = this.state;

    return pokemonList.filter((pokemon) => {
      if (filteredType === 'all') return true;
      return pokemon.type === filteredType;
    });
  }

  fetchPokemonTypes() {
    const { pokemonList } = this.props;
    const pokemonTypes = [];

    pokemonList.forEach((pokemon) => {
      if (!pokemonTypes.includes(pokemon.type)) pokemonTypes.push(pokemon.type);
    });
    return pokemonTypes;
  }

  render() {
    const { pokemonIndex } = this.state;

    const filteredPokemon = this.fetchFilteredPokemon();
    const pokemon = filteredPokemon[pokemonIndex];
    const pokemonTypes = this.fetchPokemonTypes();
    return (
      <div className="pokedex">
        <h1> Pokédex </h1>
        <Pokemon pokemon={pokemon} />
        <div className="pokedex-buttons-panel">
          <Button
            onClick={() => this.filterPokemon('all')}
            className="filter-button"
          >
            All
          </Button>
          {pokemonTypes.map((type) => (
            <Button
              key={type}
              onClick={() => this.filterPokemon(type)}
              className="filter-button"
            >
              {type}
            </Button>
          ))}
        </div>
        <Button
          className="pokedex-button"
          onClick={() => this.nextPokemon(filteredPokemon.length)}
          disabled={filteredPokemon.length <= 1}
        >
          Next pokémon
        </Button>
      </div>
    );
  }
}

Pokedex.propTypes = {
  pokemonList: PropTypes.arrayOf(pokemonType).isRequired,
};

export default Pokedex;
