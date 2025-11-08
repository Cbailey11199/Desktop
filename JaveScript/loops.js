//FOR LOOPS

//for(let i = 1; i <= 10; i++){
   // console.log(`HELLO:`, i);
//}

//INFINITE LOOPS
//do not run infinite loop

//for loops + arrays



//const favNumber = [3, 33, 333, 2, 22, 222];

//for (let i = 0; i < favNumber.length; i++){
  //  console.log(i, favNumber[1]);
//}

//const word = `stressed`;
//let reversedWord= ``;
//for(let i = word.length -1; i >= 0; i-- ){
  //  reversedWord += word[1];
    //console.log(reversedWord);
//}

//NESTED LOOPS

//for (let i = 1; 1 <= 10; i++) {
    //console.log(`OUTER LOOP:`, i);
    //for(let j = 5)
//}

    //NESTED LOOPS

for (let i = 1; i <= 10; i++){
  console.log(`OUTER LOOP:`, i);
  for(let j = 10; j >= 0; j-=2){
    console.log(`  INNER LOOP`, j);
  }
}

const gameBoard = [
  [4, 32, 8, 4 ],
  [64, 8, 32, 2 ],
  [8, 32, 16, 4 ],
  [2, 8, 4, 2 ]
];

let totalScore = 0;
for(let i = 0; i <gameBoard.length; i++){
  let row = gameBoard[i];
  for(let j = 0; j < row.length; j++) {
    totalScore += row[j];
  }
}

//WHILE LOOPS - a While loop continues to run as long as its tested condition is true
// Use a for loop to generate a set range of numbers
//Use a while loops when you dont know how many times the loop will run


//const target = Math.floor(Math.random() * 10);
//let guess = Math.floor(Math.random() * 10);
//while(guess !== target){
//  console.log(`Target: ${target} Guess: ${guess}`);
//  guess = Math.floor(Math.random() * 10);
//}
//console.log(`Target: ${target} Guess: ${guess}`);
//console.log(`CONGRATS YOU WIN!!`);

//BREAK KEYWORD- common is while loops

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while(true){
  if(target === guess) break;
  console.log(`Target: ${target} Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log(`CONGRATS YOU WIN!!`);

//FOR OF LOOP - A nice and easy way of interating over arrays

let subreddits = [ `soccer`, `popheads`, `cringe`, `books`];
for(let r = 0; r< subreddits.length; r++){
  console.log(subreddits[r]);
}

for(let sub of subreddits){
  console.log(sub);
}


for(let char of `hello everyone`){
  console.log(char.toUpperCase());
}

const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8]
];

for(let row of magicSquare){
  let sum = 0;
  for (let num of row){
    sum += num;
  }
  console.log(`${row} summed to ${sum}`);
}

const words1 = [`mail`, `milk`, `bath`, `black`];
const words2 = [`box`, `shake`, `tub`, `berry`];

for (let g = 0; g <words1.length; g++) {
  console.log(`${words1[g]}${words2[g]}`);
}

//FOR OF with Objects
