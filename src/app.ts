


/**
 * Primitive Types(String,number,boolean);
 * unionTypes and how inferred types in typescript;
 * 
*/
let myName = 'Abdullah';
// myName = 34343; myName is string that why we can't change it and ts show the error
let usedTech:string = 'Typescript';
// failed to infer and consider it any type that why doesn't show any error here
// let Home;
// Home="Sylhet";
// Home=false; 

// if we declare typed 
let Home:string;
Home="Sylhet";
// Home = 3343; here it's show error 

console.log(myName);


let age = 34;
// or 
// let age:number;
// age = 45


// union types 

let ageYear:number | string | boolean | [] = 56;
 ageYear= '25';
 ageYear = false;
 ageYear = [];
//  ageYear = {}; it shows error ,cause 


