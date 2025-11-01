//objects are collections of properties 
//properties are a key-value pair
//rather than accessing data using an index, we use custom keys
//to use objects you use {} refered to as object litteral
//objects are not used to order arrays are

const fitBitData = {
    totalSteps: 308727,
    totalMiles: 211.7,
    avgCalorieBurn: 5755,
    workoutsThisWeek: `5 of 7`,
    avgGoodSleep: `2:13`,
    45: `forty five`
};

let data = {a: 1, b: 2, c: 3};

//accessing objects

const numbers = {
    100: `one hundred`,
    16: `sixteen`,
};
 //to access this you use numbers[100]

 const palette = {
    red:` #eb4d4b`,
    yellow:` #f9ca24`,
    blue:` #30336b`
 };

 let mysteryColor = `yellow`;

 //UPDATING & ADDING PROPERTIES
 //you use = 

 const userReviews = {};

userReviews[`queenBee48`] = 4.0;

userReviews.mrSmith78 = 3.5;

userReviews[`queenBee48`] += 2;

//NESTED ARRAYS & OBJECTS

const student = {
    firstNmae: `David`,
    lastName: `Jones`,
    strengths: [`Music`, `Art`],
    exams: {
        midterm: 92,
        final: 88
    }
};
const avg = (student.exams.midterm + student.exams.final) /2;

const shopping = [
    {
        product: `Jenga Classic`,
        price: 6.88,
        quantity: 1
    },
    {
        product: `Echo Dot`,
        price: 29.99,
        quantity: 3
    },
    {
        product: `Fire Stick`,
        price: 39.99,
        quantity: 2
    }
];

const game = {
    player1:{
        userName:`Blue`,
        playingAs: `X`
},
    player2:{
        userName: `Muffin`,
        playingAs: `O`
    },
    board: [
         [`0`,null, `X`],
          [`X`,null, `O`],
           [null,`O`, `X`]
    ]
};

let tums = [1,2,3];
let mystery = [1,2,3];





