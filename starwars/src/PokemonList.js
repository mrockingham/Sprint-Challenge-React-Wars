import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard'
const PokemonList = () =>{
 const [pokemon, setPokemon] = useState([])

 useEffect(()=>{
     axios.get( 'https://pokeapi.co/api/v2/pokemon?limit=51')
     .then(response => {
         console.log("Response",response)
        setPokemon(response.data.results)        
})
.catch(error => console.log('Error!',error))
},[])
console.log(pokemon)
 return(
      <div className='pokemon'> 
      {pokemon.map (pokemon1 => ( 
          <PokemonCard pokemon1 = {pokemon1} /> 
      ))}       
</div>
      )
}


export default PokemonList