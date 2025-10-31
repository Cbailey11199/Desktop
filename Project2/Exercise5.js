const guest = [`ANTONY`, `CICERO`, `CASSIUS`, `CLEOPATRA`];

guest.unshift(`BRUTUS`);

//use guest[0]

guest.push(`AUGUSTUS`, `LUCIA`);
guest.indexOf(`SPARTACUS`);

//-1

const indexToRemove = guest.indexOf(`CASSIUS`);
guest.splice(indexToRemove, 1);

const specialGuests = guest.splice(0,4);

const honoredGuests = guest.clice(0,1);
const otherGuest = guest.slice(2);
otherGuest.sort();
const sortedGuest = honoredGuests.concat(otherGuest);
