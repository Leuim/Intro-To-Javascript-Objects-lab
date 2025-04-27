const pokemon = require("./data.js");

const game = {
    party: [],
    gyms: [
        { location: "Pewter City", completed: false, difficulty: 1 },
        { location: "Cerulean City", completed: false, difficulty: 2 },
        { location: "Vermilion City", completed: false, difficulty: 3 },
        { location: "Celadon City", completed: false, difficulty: 4 },
        { location: "Fuchsia City", completed: false, difficulty: 5 },
        { location: "Saffron City", completed: false, difficulty: 6 },
        { location: "Cinnabar Island", completed: false, difficulty: 7 },
        { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
        { name: "potion", quantity: 4 },
        { name: "pokeball", quantity: 8 },
        { name: "rare candy", quantity: 99 },
    ],
};

// console.dir(pokemon, {maxArrayLength: null});
// console.log(pokemon[59 - 1].name)
// console.log(game)

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/
game.difficulty = "Easy";
console.log(game.difficulty);

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/
let pokemonNum = 25;
if (pokemon[pokemonNum - 1].starter === true) {
    const starterPokemon = pokemon[pokemonNum - 1];
    game.party.push(starterPokemon);
    console.log("pokemon is starter", starterPokemon);
} else {
    console.log("Pokemon is not starter");
}

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/
game.party.push(pokemon[6 - 1]);
game.party.push(pokemon[9 - 1]);
game.party.push(pokemon[39 - 1]);

console.log(game.party);

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/
game.gyms.forEach((gym, i) => {
    if (gym.difficulty < 3) {
        gym.completed = true;
    }
});
console.log(game.gyms);

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/
game.party.splice(0, 1, pokemon[26 - 1]);
console.log(game.party);

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/
game.party.forEach((partyObj) => {
    console.log(partyObj.name);
});

/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/

pokemon.forEach((pokemonObj) => {
    if (pokemonObj.starter === true) {
        console.log(`${pokemonObj.name} is a starter`);
    }
});

/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/

game.catchPokemon = function (pokemonObj) {
    game.party.push(pokemonObj);
};
game.catchPokemon(pokemon[44 - 1]);
console.log(game.party[game.party.length - 1]);

/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/
game.catchPokemon = function (pokemonObj) {
    game.party.push(pokemonObj);
    game.items[1].quantity = game.items[1].quantity - 1;
    console.log(
        `Pokemone caught! current amount of pokeballs in inventory: ${game.items[1].quantity}`
    );
};
game.catchPokemon(pokemon[100 - 1]);

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/
game.gyms.forEach((gym, i) => {
    if (gym.difficulty < 6) {
        gym.completed = true;
    }
});
console.log(game.gyms);

/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/
game.gymStatus = function () {
    const gymTally = {
        completed: 0,
        incomplete: 0,
    };
    game.gyms.forEach((gymObj, i) => {
        if (gymObj.completed === true) {
            gymTally.completed++;
        } else {
            gymTally.incomplete++;
        }
    });
    console.log(gymTally);
};
game.gymStatus();

/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/
game.partyCount = function () {
    let pokemonSum = 0;
    game.party.forEach((partyObj, i) => {
        pokemonSum++;
    });
    console.log(pokemonSum);
};
game.partyCount();
console.log(game.party);

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/
game.gyms.forEach((gym, i) => {
    if (gym.difficulty < 8) {
        gym.completed = true;
    }
});
console.log(game.gyms);

/*
Exercise 17
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 17 here:
*/
const sortedArray = game.party.sort((a, b) => a.hp - b.hp);
console.log(sortedArray);

/*
Exercise 18
Add a new property to the `game` object called `collection` and initialize its value to an empty array.

Copy the `catchPokemon` method you wrote in Exercise Twelve and paste it below. Modify it so that:
  - Ensure that no more than six Pokemon can be in the party at any time. 
    Excess Pokemon should be placed in the `game.collection` array.
  - It's up to you how to distribute Pokemon in a situation where more than six 
    would be placed into the `game.party` array.

Again, for this exercise, it's okay to have a negative number of pokeballs.

After updating the method, use it by calling it and passing in a pokemon object of your choice from the `pokemon` data to catch it.

Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 18 here:
*/
game.collection = [];
game.catchPokemon = function (pokemonObj) {
    let pokeballsNum = game.items[1].quantity;
    if (game.party.length >= 6) {
        game.collection.push(pokemonObj);
        pokeballsNum--;
        console.log(
            `Pokemone caught, party is full, pokemon sent to the collection! current amount of pokeballs in inventory: ${pokeballsNum}`
        );
    } else if (game.party.length < 6) {
        game.party.push(pokemonObj);
        pokeballsNum--;
        console.log(
            `Pokemone caught and sent to the party! current amount of pokeballs in inventory: ${pokeballsNum}`
        );
    }
    game.items[1].quantity = pokeballsNum;
};
game.catchPokemon(pokemon[37 - 1]);
game.catchPokemon(pokemon[65 - 1]);
game.catchPokemon(pokemon[87 - 1]);

/*
Exercise 19
Copy the `catchPokemon` method that you just wrote above, and paste it below. The time has come to make it so that we cannot catch a Pokemon when we do not have any pokeballs to catch it with. 

Modify the method so that if there are no pokeballs a message will be displayed that there are not enough pokeballs to catch the desired Pokemon.

Also, ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 19 here:
*/

game.catchPokemon = function (pokemonObj) {
    let pokeballsNum = game.items[1].quantity;
    if (pokeballsNum > 0) {
        if (game.party.length >= 6) {
            game.collection.push(pokemonObj);
            pokeballsNum--;
            console.log(
                `Pokemone caught, party is full, pokemon sent to the collection! current amount of pokeballs in inventory: ${pokeballsNum}`
            );
        } else if (game.party.length < 6) {
            game.party.push(pokemonObj);
            pokeballsNum--;
            console.log(
                `Pokemone caught and sent to the party! current amount of pokeballs in inventory: ${pokeballsNum}`
            );
        }
    } else {
        console.log("No pokeballs left to catch the pokemon");
    }
    game.items[1].quantity = pokeballsNum;
};
game.catchPokemon(pokemon[37 - 1]);
game.catchPokemon(pokemon[64 - 1]);
game.catchPokemon(pokemon[29 - 1]);
game.catchPokemon(pokemon[75 - 1]);
game.catchPokemon(pokemon[83 - 1]);
console.log(game.collection);

/*
Exercise 20
Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify is so that you can just pass in the name of a Pokemon instead of an entire object, and the method will look up the Pokemon from the data set for you.

The string passed in should be allowed to be any case (for example, if the string 'PiKacHU' is passed to the function, it should match to 'Pikachu' in the data set). 

If there is not a match, then return a string noting that the selected Pokemon does not exist. Ensure you do not decrement the pokeball count if an invalid Pokemon name is passed in, and also ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 20 here:
*/
game.catchPokemon = function (pokemonName) {
    let pokeballsNum = game.items[1].quantity;
    let pokemonChoosen = null;
    const formattedName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1).toLowerCase();

    pokemon.forEach(pokemonObj => {
        if (formattedName === pokemonObj.name) {
            pokemonChoosen = pokemonObj;
        }
    });
    if (!pokemonChoosen) {
        console.log("There is no Pokémon with this name");
        return;
    }
    if (pokeballsNum > 0) {
        if (game.party.length >= 6) {
            game.collection.push(pokemonChoosen);
            pokeballsNum--;
            console.log(
                `Pokémon caught, party is full, Pokémon sent to the collection! Current amount of pokeballs in inventory: ${pokeballsNum}`
            );
        } else if (game.party.length < 6) {
            game.party.push(pokemonChoosen);
            pokeballsNum--;
            console.log(
                `Pokémon caught and added to the party! Current amount of pokeballs in inventory: ${pokeballsNum}`
            );
        }
    } else {
        console.log("No pokeballs left to catch the Pokémon");
    }
    game.items[1].quantity = pokeballsNum;
};
game.catchPokemon('Pikachu')