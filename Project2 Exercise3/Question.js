const randomNumber = Math.random();
const range = 33 - 3 + 1;
const randomInRange = randomNumber * range;
const randomInt = Math.floor(randomInRange);
const shiftValue = randomInt + 3;
//I read the answer but im really not sure why, but its to ensure that the random number is between 3 and 33//
const randomInRange = randomNumber * range;
//It gives us a random decimal within the range//
const randomInt = Math.floor(randomInRange);
//mathfloor rounds down while mathround rounds down or up. so if we got 33.7 it would round up going over the range//
const shiftValue = randomInt + 3;
//this shifts the range from 0-30 to 3-33//