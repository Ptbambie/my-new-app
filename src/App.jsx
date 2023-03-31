import { useState } from 'react'
import './App.css'
import PokemonCard from "./component/PokemonCard"
import NavBar from './component/NavBar';




function App() {
  const [count, setCount] = useState(0);

  return(
  <>       
  <PokemonCard pokemon = {pokemonList[count]}/>
  <NavBar count = {count} setCount = {setCount} pokemonList={pokemonList}/>
  </>
  )
}


const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

export default App
