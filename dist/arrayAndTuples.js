"use strict";
// Array and Tuples in typescript
var players = ['Messi', 'Ronaldo'];
players[0] = 1;
players.push('Neymar');
// players.push(10); inferred just string 
var newPlayers = players.map(function (player, index) {
    index + 1 + ". " + player;
});
console.log(players, newPlayers);
// tuples
var cricketPlayers; // index wise types declare
cricketPlayers = ['Messi', 'naymar', 2243, false, 'Abdullah'];
