import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PokemonPage from '../containers/PokemonPage';
import PokemonList from '../containers/PokemonList';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={PokemonList} />
      <Route path="/pokemon" component={PokemonPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
