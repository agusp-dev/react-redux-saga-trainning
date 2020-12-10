import { all } from 'redux-saga/effects'
import pokemons from './pokemonsSagas'

export default function* rootSaga() {
  yield all([
    pokemons()
  ])
}