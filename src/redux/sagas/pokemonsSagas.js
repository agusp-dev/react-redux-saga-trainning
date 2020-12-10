import { put, call, takeLatest } from 'redux-saga/effects'
import { getPokemonsApiCall } from '../api'
import { 
  GET_POKEMONS,
  GET_POKEMONS_LOADING,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_ERROR
} from '../types/pokemonsTypes'

function* getPokemons({ payload }) {
  yield put( getPokemonsLoading(true) )
  try {
    const res = yield call( getPokemonsApiCall, 'get', 'https://pokeapi.co/api/v2/pokemon' )
    const { results } = res
    yield put( getPokemonsSuccess(results) )
  } catch(e) {
    yield put( getPokemonsError(e.message) )
  }
}

const getPokemonsLoading = data => ({ type: GET_POKEMONS_LOADING, payload: data })
const getPokemonsSuccess = data => ({ type: GET_POKEMONS_SUCCESS, payload: data })
const getPokemonsError = error => ({ type: GET_POKEMONS_ERROR, payload: error })

//Watchers
export default function* pokemons() {
  yield takeLatest( GET_POKEMONS, getPokemons )
}