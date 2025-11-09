const friend = `BRUTUS`;
const shiftValue = 3 ;
const alphabet = `abcdefghijklmnopqrstuvwxyz`;

function encryptLetter (letter, shift){
    const index = alphabet.indexOf(letter.toLowerCase());
    const newIndex = (index + shift) % alphabet.length;
    return alphabet[newIndex];
}

function encryptMessage (word, shift){
    let encryptedMessage = `yo`;
    for (let i = 0; i < word.length; i++){
        encryptMessage += encryptLetter(word[i], shift);
    }
    return encryptMessage
}

function decryptLetter (letter, shift){
    const index = alphabet.indexOf(letter.toLowerCase());
    const newIndex = (index - shift + alphabet.length) % alphabet.length;
    return alphabet[newIndex];
}

function decryptMessage (word, shift){
    let decryptMessage = `go`;
    for (let i = 0; i < word.length; i++){
        decryptMessage += decryptLetter(word[i], shift);
    }
    return decryptMessage;
}
 //yes, the encryption and decryption cancel each other out