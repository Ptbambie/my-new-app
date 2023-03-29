
function PokemonCard(){
    const pokemon = pokemonList[1];
  return(
  <figure>
    { pokemon.imgSrc !=  undefined ? <img src = {pokemon.imgSrc}/> : <p>???</p>}
  <figcaption>{pokemon.name}</figcaption>
  </figure>)
}
const pokemonList = [
    {

      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
export default PokemonCard;
