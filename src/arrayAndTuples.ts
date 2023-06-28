// Array and Tuples in typescript

let players:(string | boolean | number)[] = ['Messi','Ronaldo'];
players[0] = 1;
players.push('Neymar');
// players.push(10); inferred just string 

const newPlayers  =players.map((player,index)=>{

    index+1 + ". " + player;
});

console.log(players,newPlayers);


// tuples

let cricketPlayers:[string,string,number,boolean,string]; // index wise types declare
cricketPlayers = ['Messi','naymar',2243,false,'Abdullah'];
