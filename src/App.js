import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import logo from './logo.svg';
import './App.css';
import { getPokemons } from './redux/actions/pokemonsActions'

function App() {

  const dispatch = useDispatch()

  const pokemons = useSelector( state => state.pokemons.data )
  const loading = useSelector( state => state.pokemons.loading )
  const error = useSelector( state => state.pokemons.error )

  useEffect(() => {
    dispatch( getPokemons() )
  }, [])


  return (
    <div className="App">
      {error && (
        <p>{ error }</p>
      )}
      {loading && (
        <p>Loading...</p>
      )}
      {pokemons && (
        pokemons.map(p => <p>{p.name}</p>)
      )}
    </div>
  );
}

export default App;
