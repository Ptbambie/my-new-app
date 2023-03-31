import { useState } from 'react'
import './App.css'
import PokemonCard from "./component/PokemonCard"


function App() {
  const [count, setCount] = useState(0);//On part de 0 => state

  const next = () =>{
    setCount(count + 1)// on incrémente =>comportement
  }
  const previous = () =>{
    setCount(count - 1)// on décrémente
  }
 
  return (                    // affichage
    <div className='pokemoneBox'>
      <PokemonCard pokemon = {pokemonList[count]}/>

    <div className='pokemoneBall'>
     {count > 0 ? <button onClick={previous}>previous</button> : <button>First Pokemon</button>}
      {/* <button onClick={next}>next</button> */}
    {count < pokemonList.length -1 ? <button onClick={next}>next</button> : <button>Next Pokemon</button>}
    </div>
  </div>
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
