console.log("Lecture 16");

let myName = "Maslma Alzebda";
console.log(myName);

myName = "Maslma Alzebda - Update";
console.log(myName);

const truth = "Free Palestine";
console.log(truth);

// name const
const COLOR_RED = "#F00";
console.log(COLOR_RED);

let myAge;
console.log(myAge); // undefined

myAge = "30"; // re-assignment
console.log(myAge);

// const someOneAge;
// console.log(someOneAge);->SyntaxError: Missing initializer in const declaration

// truth = "Not Free Palestine";
// console.log(truth); -> Type Error : Assignment to constant variable.

// const someOneName = 21;
// const someOneName = 23;  // SyntaxError: re-declaration of const someoneName

let othersAge = 40;
console.log(othersAge);
othersAge = 44;
console.log(othersAge);

// let othersAge = 45; SyntaxError: Identifier 'othersAge' has already been declared

var studentAge = 17;
console.log(studentAge);
studentAge = 18;
console.log(studentAge);

var studentAge = 20;
console.log(studentAge);

if (studentAge > 19) {
  const hisID = "ID";
  let hisStudentNumber = "123456780";
  var hisDegree = "Computer science";
  console.log(hisID, hisStudentNumber, hisDegree);
}

//const , let -> scope برا  Accssing ما بقدر اعمل
// console.log(hisID, hisStudentNumber); ReferenceError: hisID is not defined

console.log(hisDegree);

// in strict mode: ReferenceError: assignment to undeclared variable studentPassport
studentPassport = "passport";
console.log(studentPassport);

// Data Types

// Numbers
const myNumber = 10; // -> in other languages it looks like: Int myNumber = 10;
const hisNumber = 10.5; // -> in other languages it looks like: Float hisNumber = 10.5;
console.log(hisNumber - myNumber);
console.log(hisNumber + myNumber);
console.log(hisNumber * myNumber);
console.log(hisNumber / myNumber);

const myZero = 0;

console.log(myNumber / myZero); // Infinity
console.log(-10 / myZero); // -Infinity
console.log(myName / myNumber); // NaN

// Strings
const herString = "Hello";
const hisString = "World";
const otherString = `I jest want to say: ${herString} to ${hisString} `;
const theirString = `${herString} to ${hisString}`;
const myFancyString = `My name is ${myName} and I want to say ${truth}. I am ${
  2024 - 1998
} years old.`;
console.log(herString);
console.log(hisString);
console.log(theirString);
console.log(otherString);
console.log(myFancyString);

// Booleans
const myBoolean = true;
const hisBoolean = false;

console.log(myBoolean, hisBoolean);

myAge = 18;

const isLegallyOldEnough = myAge >= 18;
const isInSchool = myAge < 18;
const isInFirstYearOfUniversity = myAge === 19;

console.log(isLegallyOldEnough);
console.log(isInSchool);
console.log(isInFirstYearOfUniversity);

// Null/Undefined

let userName = null;
console.log(userName);

// user entered his name
userName = "Someone's Name";
console.log(userName);

// Objects/Arrays
const myObject = { name: "Shawqi Hatem", age: 30 };
const myArray = ["Shawqi Hatem", 30, 1998];

// `typeof` operator
console.log(typeof myName);
console.log(typeof myAge);
console.log(typeof myBoolean);
console.log(typeof null); // object
console.log(typeof undefined); // undefined

// Interactions
const myAlert = alert(`Hi ${myName}!`);
console.log("Alert:", myAlert);

const userAge = prompt("How old are you?", 18);
console.log(userAge, typeof userAge);
console.log(Number(userAge), typeof Number(userAge));

const userAgeNumber = Number(userAge);
const isUserInSchool = userAgeNumber <= 18;
console.log("Is user in school?", isUserInSchool);

console.log(
  "Back to string again:",
  String(userAgeNumber),
  typeof String(userAgeNumber)
);

const userIsStudent = confirm("Are you a student?");
console.log(userIsStudent);
