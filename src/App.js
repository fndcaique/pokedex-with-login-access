import React, { Component } from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';

import About from './components/About';
import Login from './components/Login';
import Pokedex from './components/Pokedex';
import PokemonDetails from './components/PokemonDetails';
import pokemonListData from './data';

import './styles/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      pokemonList: pokemonListData,
    };
  }

  login = (username) => {
    this.setState({ username });
  };

  render() {
    const { pokemonList, username } = this.state;

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
            path="/"
            exact
          >
            <Pokedex pokemonList={pokemonList} />
          </Route>
          <Route
            path="/about"
            component={About}
          ></Route>
          <Route
            path="/pokemon/:id"
            render={(props) => {
              if (username.length === 0) {
                return <Redirect to="/login" />;
              }
              return (
                <PokemonDetails
                  {...props}
                  pokemons={pokemonList}
                />
              );
            }}
          />
          <Route
            path="/login"
            render={(routeProps) => (
              <Login
                {...routeProps}
                login={this.login}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
