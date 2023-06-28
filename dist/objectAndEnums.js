"use strict";
// Object and Enums in Typescript
var _a;
// object key and value types 
var player;
player = {
    name: 'Messi',
    age: 35,
    country: 'Argentina',
    married: true,
    clubs: ["Barcelona", "PSG"]
};
player = {
    name: 'Naymar',
    // age:30,
    country: 'Brazil',
    married: false,
    clubs: ["Barcelona", "PSG"]
};
player.married = false;
player.age = player.age + 5; // ( not null assertion operator in typescript)
player.clubs = (_a = player.clubs) === null || _a === void 0 ? void 0 : _a.map(function (club) { return club.toUpperCase(); }); // && just checking optional clubs option exist or not..  We're using optional chaining here
console.log(player, player.country, player['clubs']);
// enum 
var friends;
(function (friends) {
    friends[friends["Arif"] = 10] = "Arif";
    friends[friends["Salam"] = 20] = "Salam";
    friends[friends["Kalam"] = 30] = "Kalam";
    friends[friends["Balam"] = 40] = "Balam";
})(friends || (friends = {}));
var configs;
(function (configs) {
    configs["API_KEY"] = "api_key";
    configs["Domain_name"] = "domain_name";
})(configs || (configs = {}));
console.log(configs.Domain_name);
// console.log(friends[0]); // find name through index
console.log(friends.Balam); // find index through name
console.log(friends[30]); // name through value;
