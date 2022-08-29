import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import About from './components/About';
import NotFound from './components/NotFound';
import Pokedex from './components/Pokedex';
import PokemonDetails from './components/PokemonDetails';
import pokemonListData from './data';

import './styles/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      pokemonList: pokemonListData,
    };
  }

  render() {
    const { pokemonList } = this.state;

    return (
      <div className="App">
        <nav>
          <Link
            className="link"
            to="/"
          >
            Home
          </Link>
          <Link
            className="link"
            to="/about"
          >
            About
          </Link>
        </nav>
        {/* Coloque as rotas aqui.
        Lembre-se de utilizar o componente que faz apenas uma rota ser renderizada */}

        <Switch>
          <Route
            exact
            path="/"
          >
            <Pokedex pokemonList={pokemonList} />
          </Route>
          <Route
            path="/about"
            component={About}
          />
          <Route
            path="/pokemon/:id"
            render={(routeProps) => (
              <PokemonDetails
                {...routeProps}
                pokemons={pokemonList}
              />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
