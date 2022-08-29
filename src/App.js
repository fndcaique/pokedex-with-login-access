import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import pokemonListData from './data';
import Pokedex from './components/Pokedex';
import About from './components/About'

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
          <Route path="/" exact>
            <Pokedex pokemonList={pokemonList} />
          </Route>
          <Route path="/about" component={ About }></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
