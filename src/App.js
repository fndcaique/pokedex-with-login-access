import React, { Component } from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';

import About from './components/About';
import Login from './components/Login';
import NotFound from './components/NotFound';
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

  onLogin = (username) => {
    this.setState({ username });
  };

  render() {
    const { pokemonList, username } = this.state;

    return (
      <div className="App">
        {/* Coloque as rotas aqui.
        Lembre-se de utilizar o componente que faz apenas uma rota ser renderizada */}
        <Switch>
          <Route
            path="/login"
            render={(routeProps) => (
              <Login
                {...routeProps}
                onLogin={this.onLogin}
              />
            )}
          />
          <Route path="*">
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
              />
              <Route
                path="/pokemon/:id"
                render={(routeProps) => {
                  if (username.length === 0) {
                    return <Redirect to="/login" />;
                  }
                  return (
                    <PokemonDetails
                      {...routeProps}
                      pokemons={pokemonList}
                    />
                  );
                }}
              />
              <Route component={NotFound} />
            </Switch>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
