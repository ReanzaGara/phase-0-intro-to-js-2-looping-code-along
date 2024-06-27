// Code your solutions in this file
function writeCards(names) {
    let messages = [];
    for(let i=0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return messages;
}

function countDown(number) {
    for(let count = number; count >= 0; count--) {
        console.log(count); 
    }
}