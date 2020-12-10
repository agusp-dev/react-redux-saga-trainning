export const getPokemonsApiCall = ( method, url ) => {
  return fetch(url, {
    method
  }).then(response => response.json())
}