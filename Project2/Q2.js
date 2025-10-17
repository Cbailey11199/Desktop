//we use % to start over//
const alphabetLength = alphabet.length;
const newIndex = (index + shiftValue) % alphabetLength;
const encryptedFirstLetter = alphabet[newIndex];
const encryptedMessage = `EUXWXV`;
const teaserM = encryptedMessage.slice(0, 3);