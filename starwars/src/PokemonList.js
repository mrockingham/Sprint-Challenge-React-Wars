import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard'
const PokemonList = () =>{
 const [pokemon, setPokemon] = useState([])

 useEffect(()=>{
     axios.get( 'https://pokeapi.co/api/v2/type/17/')
     .then(response => {
         console.log("Response",response)
        setPokemon(response.data.pokemon)      
        
    

//  const urls =[]
//  pokemon.map(types   => {
//      urls.push(types.url)
//      return urls
// })
//  console.log('try urls', urls)

    
 })

},[])

const [type, setType] = useState([])
 useEffect(()=>{
    axios.get( 'https://pokeapi.co/api/v2/type/17/')
    .then(response => {
        console.log("Response",response)
       setType(response.data.pokemon.map(type))      

    })
console.log('try types', type)
.catch(error => console.log('Error!',error))
},[])
console.log('lookin url',pokemon)
console.log('lookin type',type)



 return(
     
      <div className='pokemon'> 
      {pokemon.map (pokemon1 => ( 
          <PokemonCard pokemon1 = {pokemon1} /> 
      ))}       
      {type.map (pokemon2 => (
         < PokemonCard pokemon2 = {pokemon2} /> 
      ))}
</div>



      )
}


export default PokemonListc