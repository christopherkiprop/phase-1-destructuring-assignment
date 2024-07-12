// Given variables
const animalSounds = {
  sound1: 'moo',
  sound2: 'baa',
  sound3: 'meow',
  sound4: 'woof',
  sound5: 'roar'
};

const animalNames = ['Bessie', 'Fluffy', 'Whiskers', 'Rex'];

const animalColors = {
  color1: 'black and white',
  color2: 'brown',
  color3: 'gray'
};

const rainbowColors1 = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const rainbowColors2 = ['r', 'o', 'y', 'g', 'b', 'i', 'v'];

const muppet = {
  muppetName: 'Kermit',
  song1: 'Rainbow Connection',
  song2: 'Bein\' Green',
  song3: 'Movin\' Right Along',
  song4: 'The Rainbow Connection Reprise',
  job: 'Host of The Muppet Show',
  partner: 'Miss Piggy'
};

// Destructuring assignments
// String: uses destructuring to declare five animal sounds
const { sound1, sound2, sound3, sound4, sound5 } = animalSounds;

// String: uses destructuring to declare the four traditional animal names
const [bessie, fluffy, whiskers, rex] = animalNames;

// String: uses destructuring to declare the three traditional animal colors
const { color1: blackAndWhite, color2: brown, color3: gray } = animalColors;

// Array: uses destructuring to declare the seven traditional rainbow color variables using the color names
const [red1, orange1, yellow1, green1, blue1, indigo1, violet1] = rainbowColors1;

// Array: uses destructuring to declare six rainbow color variables using initials
const [r, o, y, g, b, i, v] = rainbowColors2;

// Array: uses destructuring to declare Indigo using indg
const [, , , , , indg] = rainbowColors1;
const indigo = indg;

// Object: uses destructuring to assign all appropriate variables using the keys as the variable names
const { muppetName, song1, song2, song3, song4, job, partner } = muppet;

// Object: uses destructuring to assign songs 2 and 4, and Kermit's job and partner
const { song2: secondSong, song4: fourthSong, job: kermitJob, partner: kermitPartner } = muppet;

// Output to verify assignments
console.log(sound1, sound2, sound3, sound4, sound5);
console.log(bessie, fluffy, whiskers, rex);
console.log(blackAndWhite, brown, gray);
console.log(red1, orange1, yellow1, green1, blue1, indigo1, violet1);
console.log(r, o, y, g, b, i, v);
console.log(indigo);
console.log(muppetName, song1, song2, song3, song4, job, partner);
console.log(secondSong, fourthSong, kermitJob, kermitPartner);

// Exporting variables if needed (uncomment if you need to export these variables)
/*
module.exports = {
  sound1, sound2, sound3, sound4, sound5,
  bessie, fluffy, whiskers, rex,
  blackAndWhite, brown, gray,
  red1, orange1, yellow1, green1, blue1, indigo1, violet1,
  r, o, y, g, b, i, v,
  indigo,
  muppetName, song1, song2, song3, song4, job, partner,
  secondSong, fourthSong, kermitJob, kermitPartner
};
*/
