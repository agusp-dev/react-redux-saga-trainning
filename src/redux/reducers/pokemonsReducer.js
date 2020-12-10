import { bindActionCreators } from 'redux'
import {
  GET_POKEMONS_LOADING,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_ERROR
} from '../types/pokemonsTypes'

const initialState = {
  data: [],
  error: null,
  loading: false
}

export default function( state = initialState, action ) {
  switch (action.type) {
    case GET_POKEMONS_LOADING:
      return {
        ...state,
        loading: action.payload
      }

    case GET_POKEMONS_SUCCESS: 
      return {
        ...state,
        loading: false,
        data: [...action.payload]
      }
    
    case GET_POKEMONS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
  
    default:
      return state
  }
}