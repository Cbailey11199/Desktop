const emblemClue1 = `Eagle`;
const emblemClue2 = `Laurel`;
const emblemClue3 = 7;

let location = `location`; 

if(emblemClue1 === `Eagle`){
location = `Forum`;
}
else if (emblemClue1 ===`Lion`){
    location = `Colosseum`;
}
else {
    location = `Villa`;
}

if(emblemClue2 === `Laurel` && location === `Forum`){
    location += `of Augustus`;
}
else if(emblemClue2 === `Grapes` || location === `Villa`){
    location += `of Pompey`;
}

switch(location){
    case 7:
        location += `North`;
        break;
    case 3:
        location += `South`;
        break;
    case 9:
        location += `East`;
    case 4:
        location += `West`;
        break;    
}
//=== cheack value and type while == only checks the value