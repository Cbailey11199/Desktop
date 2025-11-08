const friend = "BRUTUS"
const shiftValue = 3;

const alphabet = `abcdefghijklmnopqrstuvxyz`;

let encrytedName = ``;

for (let i = 0; i < friend.length; i++) {
    const currentLetter = friend[i];
    const currentIndex = alphabet.indexOf(currentLetter.toLowerCase());
    const newIndex = (currentIndex + shiftValue) % alphabet.length;
    encrytedName += alphabet[newIndex].toUpperCase();
}
//lets us process each letter of the name without redundant code

//% ensures that if the sum of the current index and the shift value surpasses the alphabets length