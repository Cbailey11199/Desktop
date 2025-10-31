//to make an array us []

let shoppingList = [`ice`, `cheese`, `turkey`];

let lotto = [45,23,12,56];

let colors = [`red`, `blue`, `yellow`, `green`, `orange`, `purple`, `violet`];
//to access info in arrays its colors[]

//modifying arrays

colors[2] = `peach`;
// you can also add to the arrays
colors[7] = `black`; //add the next number in the string to add

//if the array is out of view
colors[colors.length] = `white`

//Array Methods
//push - add to end
//pop - remove from end
//shift - remove from start
//unshift - add to start

let topSongs = [
    `Hate the other side`,
    `Stay High`,
    `Already Dead`,
    `Coversations`
];

topSongs.push(`Hear Me Calling`);
topSongs.unshift(`Hate Me`);

//More Methods
//concat - merge arrays
//includes - look for a value
//indexOf - just like str.string /tells you where the value is 
//join - creates a string from array 
//reverse - reverses an array
//slice - copy portion of an array
//splice - rermove/replace elements 
//sort - sorts an array

let fruits = [`apple`, `banana`];
let veggies = [`peas`, `corn`];
let meats = [`steak`, `chicken`];
console.log(fruits.concat(veggies));
let allFoods = fruits.concat(veggies, meats);


let goodFruits = allFoods.slice(0, 4); //with splice you have to go 1 over the value you want so if corn is at value 3 you have to put 4
//slice also can make a copy with just .slice()

//const cannot be changed/ most people use const with arrays/you can change the values inside of an array just not the array

//nested arrays

const animalPairs = [
    [`doe`, `buck`],
    [`ewe`, `ram`],
    [`peahen`, `peacock`]
];
const board = [
    [`O`, null, `X`],
    [null, `X`, `O`],
    [`X`, `O`, null]
]

