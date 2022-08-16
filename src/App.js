import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AppNavigator from './components/AppNavigator';
import Pokedex from './containers/Pokedex';
import PokemonDetails from './containers/PokemonDetails';
export default function App() {
  return (
    <BrowserRouter>
      <AppNavigator />
      <Routes>
        <Route exact path="/" element={<Pokedex />}/>
        <Route exact path="/pokemon/:id" element={<PokemonDetails />}/>
      </Routes>
  </BrowserRouter>
  )
}