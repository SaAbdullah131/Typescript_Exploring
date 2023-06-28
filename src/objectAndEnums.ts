// Object and Enums in Typescript

// object key and value types 
let player:{
    name:string;
    age?:number; // just using ? it's a optional property 
    country:string;
    married:boolean;
    clubs?:string[]
} 
player= {
    name:'Messi',
    age:35,
    country:'Argentina',
    married:true,
    clubs:["Barcelona","PSG"]
}
player= {
    name:'Naymar',
    // age:30,
    country:'Brazil',
    married:false,
    clubs:["Barcelona","PSG"]
}
player.married = false;
player.age = player.age! + 5;// ( not null assertion operator in typescript)
player.clubs = player.clubs?.map(club=>club.toUpperCase()); // && just checking optional clubs option exist or not..  We're using optional chaining here

console.log(player,player.country,player['clubs']);


// enum 
enum friends {
    Arif=10,
    Salam=20,
    Kalam=30,
    Balam = 40
}
enum configs {
    API_KEY = 'api_key',
    Domain_name = 'domain_name',
}
console.log(configs.Domain_name);
// console.log(friends[0]); // find name through index
console.log(friends.Balam);// find index through name
console.log(friends[30])// name through value;