const { Pokemon } = require("../database/setup"); // Do not edit/remove this line !

// Display pokemons from database
function displayPokemons() {
  Pokemon.find().then(data => {
    console.log("ALL POKEMON =>", data);
  });
}
//displayPokemons();

// Create a new pokemon in database
function createPokemon(pokemonName, typeName, typeColor) {
  

  // Write your code here

  const newPokemon = new Pokemon({
    name: pokemonName,
    types: [{name : typeName, color : typeColor}]
   });

   newPokemon.save().then(data => {
    console.log(data);})

}
//createPokemon('pikachu', 'electric', 'yellow');

// Add a sub-document/sub-object to an array



function addType(pokemonName, typeName, typeColor) {
  Pokemon.updateOne(
    { name: pokemonName },
    { $push: {types:{
        name: typeName,
        color: typeColor
      }
    }}
   ).then(() => {
  
    Pokemon.find().then(data => {
      console.log(data);
    });
  
   });
  }



addType('pikachu', 'rock', 'brown')

// Update type in "pokemon" collection
function updateType(typeName, typeColor) {
  // Write your code here

}
// updateType('rock', 'grey')

// Delete type from "pokemon" collection
function deleteType(typeName) {
  // Write your code here
}
// deleteType('rock')

module.exports = {
  displayPokemons,
  createPokemon,
  addType,
  updateType,
  deleteType,
}; // Do not edit/remove this line !
