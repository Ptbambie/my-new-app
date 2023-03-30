
function PokemonCard({pokemon}){
    // const pokemon = pokemonList[1];
  return(
  <figure>
    { pokemon.imgSrc !=  undefined ? <img src = {pokemon.imgSrc}/> : <p>???</p>}
  <figcaption>{pokemon.name}</figcaption>
  </figure>)
}

export default PokemonCard;
