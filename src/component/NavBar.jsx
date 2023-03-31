import React from 'react';
import { useEffect } from 'react';

function NavBar({count, setCount, pokemonList}){
    // state (données)

    // Comportement
    const next = () =>{
        setCount(count + 1)// on incrémente 
      }
      const previous = () =>{
        setCount(count - 1)// on décrémente
      }
     
    //Affichage
    return (          
        <div>
        {count > 0 ? <button onClick={previous}>previous</button> : <button>First Pokemon</button>}
        {count < pokemonList.length -1 ? <button onClick={next}>next</button> : <button>Next Pokemon</button>}
        </div>
    )}
    
  

  export default NavBar;