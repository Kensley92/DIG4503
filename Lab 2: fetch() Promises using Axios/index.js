// Identifies the usage of axios
const axios = require('axios');
// Fetches the URL of the pokemon
axios('https://pokeapi.co/api/v2/pokemon/lugia')
    // Fuction that retrieves the data of the Pokemon
    .then(function (response) {
         const pokemon = response.data;
        // Displays a log within the console of the Pokemon's name and it's ID
        console.log("This is a " + pokemon.name + " and its ID is " + pokemon.id);
    })
    // If error occurs, the following data will display an error
    .catch(function (error) {console.log("Error: " + error);
    });
