import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RickMortyCard from './RickMortyCard'
import { Container, Row } from "reactstrap";

const RickMortyList = () =>{
const [RickMorty, setRickMorty] = useState([])


useEffect(()=>{
    axios.get('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18')
    .then(response =>{
        
        setRickMorty(response.data)
        console.log(response)
    })
    .catch(error =>{
        console.log(error)
    })
},[])

return(
    <Container>
        <Row>
            {RickMorty.map (Character=>(
                <RickMortyCard Character ={Character} />
            ))}
            
        </Row>
    </Container>
)
}




export default RickMortyList