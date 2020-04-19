import React from 'react';
import PokemonList from 'C:/Users/User/desktop/lambdaflex/Sprint-Challenge-React-Wars/starwars/src/PokemonList.js'
import './App.css';
import RickMortyList from './RickMortyList'
import { Alert } from 'reactstrap';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    
      <div className="App">
         <Alert color="success">
        <h4 className="alert-heading">Michael's Rick and Morty</h4>
        <p>
          These guys are cool but they are no POKEMON!!!!
        </p>
        <hr />
        <p className="mb-0">
         Weekend project will be to figure out how to double grab an api
        </p>
      </Alert>
        < RickMortyList />
      </div>
    );
}

export default App;
