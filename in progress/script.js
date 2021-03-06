'use strict';

// Coding Challenge #1

/* 
Coding Challenge #1
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1.
// const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

// // 2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// // 5.
// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;

// console.log(team1, draw, team2);

// // 6.
// function printGoals(...name) {
//   const names = [...name];
//   console.log(names);
//   let totalGoals = 0;
//   for (let i = 0; i < game.scored.length; i++) {
//     for (let j = 0; j < names.length; j++) {
//       console.log(names[j], game.scored[i]);
//       if (names[j] === game.scored[i]) {
//         totalGoals++;
//       }
//     }
//   }
//   return totalGoals;
// }

// console.log(printGoals('Lewandowski', 'Gnarby'));

// // 7.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// Object itselt
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  Name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Property Names - Looping objects: Object Keys, Values and Entries;

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days a week `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

// Property Values
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// //With optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// //Example

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   // console.log(day);
//   const status = restaurant.openingHours[day]?.open ?? 'closed';
//   if (status != 'closed') {
//     console.log(`On ${day}, we open at ${status}`);
//   } else {
//     console.log(`On ${day}, we are ${status}`);
//   }
// }

// //Methods
// console.log(restaurant.orderPasta?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisoto?.(0, 1) ?? 'Method does not exist');

// //Arrays
// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

// console.log(users[0]?.name ?? "That name does't exist");

// if (user.length > 0) console.log(users[0].name);
// else console.log('user array empty');

// console.log(restaurant);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// for (const item of menu) {
//   console.log(item);
// }

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log([...menu.entries()]);

// restaurant.numGuests = 0; // I din't understad this syntax.
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// //Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

/*
console.log('-----OR-----');
// Use any data type, return any data type,
// short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello!' || 23 || null);

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

console.log('-----AND-----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello' && 23 && null && 'Jonas');

//Practical Example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// const a = 2;
// const b = 3;
// const c = a < b ? 'minor' : 'major';
// console.log(c);

/*
// 1) DESTRUCTURING

//SPREAD, BECAUSE ON RIGHT SIDE OF =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

//REST, BECAUSE ON LEFT SIDE OF =
const [a, b, , ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//OBJECTS
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//2) FUNCTIONS
const add = function (...numbers) {
  console.log(numbers);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

//SPREAD, because on right side of =
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

//REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

//objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// 2) Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

*/

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

// const { Name, openingHours, categories } = restaurant;
// console.log(Name, openingHours, categories);

// const {
//   Name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

//Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

//Mutanting variables
// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c:14};
// ({a, b}) = obj;
// console.log(a,b);

//Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// const { sat } = openingHours;
// console.log(o, c);

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// const newArr01 = [1, 2, arr];
// console.log(newArr01);

// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

//Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// Join 2 Arrays
// const completeMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(completeMenu);

//Iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Jonas';
// const letters = [...str, '', 'S.'];
// console.log(letters);

// const txt = 'Cristiano';
// console.log(...txt);
// console.log(txt);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];

// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

//Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.Name = 'Ristorante Roma';
// console.log(restaurantCopy);

// const { Name, openingHours, categories } = restaurant;
// console.log(Name, openingHours, categories);

// const {
//   Name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

/*
////////////////////////////////////////////////////////////////////////////
// Destructuring Arrays
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(
//   'A is equal to = ',
//   a,
//   ', B is equal to = ',
//   b,
//   ', C is equal to = ',
//   c
// );

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [secondary, main] = [main, secondary];
// console.log(main, secondary)*/
