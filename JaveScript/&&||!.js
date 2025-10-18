//&& both sides must be true but || either side can be true

let age1 = 3;

if (age1 < 6 || age1 >= 65) {
    console.log(`You get in for free!`);
}
else {
    console.log(`That will be $10`);
}

let color = `purple`;

if (color === `red` || color === `black` || color === `purple`) {
    console.log(`You picked a great color`);
}
else { 
    console.log(`Terrible color choice`);
}

//! is the NOT operator

let flavor = `grape`;

//if (!(flavor === `grape` || flavor === `cherry`)) {
   // console.log(`We don't have that flavor`);
//} else {
    //console.log(`Great choice!`);
//}
//this is another way to write the same conditional above

if(!(flavor === `grape` || flavor === `cherry`) ) {
    console.log(`We don't have that flavor`);
}
else {
    console.log(`Great choice!`);
}

//&& takes precedence over || so use parentheses to make it clear, ! has the highest precedence