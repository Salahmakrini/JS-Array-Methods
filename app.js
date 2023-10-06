const characters = [{
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    eye_color: 'brown',
    gender: 'female',
  },
  {
    name: 'Anakin Skywalker',
    height: '188',
    mass: '84',
    eye_color: 'blue',
    gender: 'male',
  },
];


// // MAP
// //1. Get an array of all names
const names = characters.map(character => character.name);
console.log(names);
// //2.  Get an array of all heights
const heights = characters.map(character => character.height);
console.log(heights);
// //3. Get an array of all first names
const firstNames = characters.map(character => character.name.split(' ')[0]);
console.log(firstNames);


// FILTER
//1. Get characters with mass greater than 100
const mass100 = characters.filter(character => character.mass > 100);
console.log(mass100);
//2. Get characters with height less than 200
const height200 = characters.filter(character => character.height < 200);
console.log(height200);
//3. Get all male characters
const maleCharacters = characters.filter(character => character.gender === 'male');
console.log(maleCharacters);
//4. Get all female characters
const femaleCharacters = characters.filter(character => character.gender === 'female');
console.log(femaleCharacters);


// EVERY
//1. Does every character have blue eyes?
const blueEyes = characters.every(character => character.eye_color === 'blue');
console.log(blueEyes);
//2. Does every character have mass more than 40?
const massLess40 = characters.every(character => character.mass > 40);
console.log(massLess40);
//3. Is every character shorter than 200?
const heightHigher200 = characters.every(character => character.height < 200);
console.log(heightHigher200);
//4. Is every character male?
const areAllMale = characters.every(character => character.gender === 'male');
console.log(areAllMale);


// SOME
//1. Is there at least one male character?
const areThereMaleCharacters = characters.some(character => character.gender === 'male');
console.log(areThereMaleCharacters);
//2. Is there at least one character with blue eyes?
const blueEyesCharacter = characters.some(character => character.eye_color === 'blue');
console.log(blueEyesCharacter);
//3. Is there at least one character taller than 200?
const tallerThan200 = characters.some(character => character.height > 200);
console.log(tallerThan200);
//4. Is there at least one character that has mass less than 50?
const massLess50 = characters.some(character => character.mass < 50);
console.log(massLess50);
