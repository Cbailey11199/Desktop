if (1 === 1) {
    console.log(`It's true`);
}

let rating = 3;
if (rating === 3) {
    console.log('You are a superstar');
}

let num = 123;
if (num % 2 !== 0) {
    console.log(`Odd Number`);
}

let age = 56;
if (age === 18) {
    console.log('You are an adult');
} 
else if (age === 15) {
    console.log('You are a minor');
}
else {
    console.log(`Unknown age`);
}

let highScore = 1430;
let userScore = 1440;

if (userScore >= highScore) {
    console.log(`Congrats, you have the new high score of ${userScore}`);
    highScore = userScore;
}
else {
    console.log(`Good try, you needed ${highScore - userScore} more to beat the high score of ${highScore}`);
}

let password =`hellokitty`;

if (password.length >= 6) {
    if (password.indexOf(` `) === -1){
        console.log(`Valid Password`);
    }
    
else {
    console.log(`Password is long enough, but cannot contain spaces`);
}
}
//you can nest conditionals inside other conditionals
else {
    console.log(`Password must be longer`);
}

let password1 = `chris`;

if(password1.length >= 5 && password1.indexOf(` `) === -1){
    console.log(`Valid Password`);
}
else {
    console.log(`Invalid Password`);
}

let num1 = 90;

if (num1 >= 1 && num1 <= 10) {
    console.log(`Please guess a number between 1 and 10`);
}
else {
    console.log(`Out of range`);
}