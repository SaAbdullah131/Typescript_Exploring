"use strict";
/**
 * Primitive Types(String,number,boolean);
 * unionTypes and how inferred types in typescript;
 *
*/
var myName = 'Abdullah';
// myName = 34343; myName is string that why we can't change it and ts show the error
var usedTech = 'Typescript';
// failed to infer and consider it any type that why doesn't show any error here
// let Home;
// Home="Sylhet";
// Home=false; 
// if we declare typed 
var Home;
Home = "Sylhet";
// Home = 3343; here it's show error 
console.log(myName);
var age = 34;
// or 
// let age:number;
// age = 45
// union types 
var ageYear = 56;
ageYear = '25';
ageYear = false;
ageYear = [];
//  ageYear = {}; it shows error ,cause 
