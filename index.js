// Code your solutions in this file
let spy=[];
function writeCards(names, evet) {
    for (let name of names) {
      spy.push(`Thank you, ${name}, for the wonderful ${evet} gift!`);
    }
    return spy;
}


function countDown() {
    for (let i=10; i>-1; i--) {
        console.log(i)
    }
}
countDown();
