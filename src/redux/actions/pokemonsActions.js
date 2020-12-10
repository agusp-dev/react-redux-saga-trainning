import { 
  GET_POKEMONS
} from '../types/pokemonsTypes'

export const getPokemons = payload => ({
  type: GET_POKEMONS,
  ...payload
})