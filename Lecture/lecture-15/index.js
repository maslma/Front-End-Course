// seme colms ; -> بتفصل بين الجمل ممكن ما نستخدمها وننزل سطر جديد
// console.log("Hello From index.js") ; alert("Second Alert")
console.log("Hello From index.js");
// alert("Second Alert");

// Single Line Comments

/* 
Multi Line Comment
Second Line
*/

/*
Memory Storage:
myName = "Maslma AlZebda"
myAge = undefined (programmer declared it without assigning a value)
*/

// Varibles
// Declaration and Assignment = Initialization

let myName = "Maslma AlZebda"; // Variable Initialization
console.log(myName);

let myAge; // 1-variable Declaration
console.log(myAge); // undefined

myAge = 30; // 2-variable Assignment
console.log(myAge); //30

myAge = 31;
console.log(myAge); // re-assignment

// let myAge = 32; // SyntaxError: Re-Declaration

// let vs. var
// 1. Re-Declaration
var alaaName = "Alaa";
console.log(alaaName);

var alaaName = "Alaa Mohammed";
console.log(alaaName); // Alaa Mohammed

// 2. Scope
if (true) {
  let somethingTrue = "Something True";
  console.log(somethingTrue);
  var somethingFalse = "Something False";
}

// console.log(somethingTrue); // ReferenceError: somethingTrue is not defined
console.log(somethingFalse);

// in "use strict" mode, a ReferenceError will occurred
someNumber = 10; // -> var someNumber = "10"
console.log(someNumber);

// console.log(myJob); // ReferenceError:myJob is not defined

// Multiple variable Declaration
let maslmaName = "Maslma",
  maslmaAge = 24,
  maslmaJob;
console.log(maslmaName, maslmaAge, maslmaJob);

maslmaJob = "Front-End-Developer"; // Re-assignment
console.log(maslmaJob);

/* 
Variables Naming Convetions:
-Variables should be named in camelCase.
-Pascal Case /Kebab Case/Snake Case (fun assignment search for it).
-Variables only contains letters , numbers , and _ or $.
-Variables should not start with a number.
-always use meaningful names
*/

let maslmaFavColor = "blue"; //camelCase
