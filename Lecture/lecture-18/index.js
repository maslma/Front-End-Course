console.log("Lecture 18");
console.log("--------- Boolean is The Result -----------");

console.log(2 > 1);
console.log(2 == 2);
console.log(2 != 1);
console.log(2 > 1);
console.log(2 < 1);
console.log(typeof (2 > 3));
console.log(1 > "Maslma"); // 1 > Nan

console.log("--------- String Comparison --------------");
console.log("Z" > "A");
console.log("Green" > "And");
console.log("Green" < "And");
console.log("Green" < "Grape");
console.log("Letter" < "Letters");
console.log("Letter" == "Letter");
// ABC...XYZ < abc...xyz
// fun assignment search for `Unicode`
console.log("A" > "a");

console.log("--------- Comparison of Different Data Types --------------");
console.log(1 == true); // 1 == 1
console.log(1 > false); // 1 > 0
console.log(0 == false); // 0 == 0
console.log(0 == ""); // 0 === 0

console.log(0 == null); // false
console.log(0 == undefined); // false

console.log(10 > "20");
console.log(Number("010"));
console.log("010" > 5);

const firstNumber = 0;
console.log(Boolean(firstNumber)); // fasle
const secondNumber = "0";
console.log(Boolean(secondNumber)); // true ->True يبقى  Empty string  طالما مش

console.log(firstNumber == secondNumber);

console.log("------ Strict Equality --------");
console.log((firstNumber == Boolean(firstNumber)) == ""); // 0 == 0 == 0
console.log(0 === "0"); // false -> false  بعطيني  type اذا مش نقس  data type  بقارن هان
console.log(false === "false"); // false
console.log(false == "false"); // false
console.log(false == "  0  "); // true
console.log(firstNumber === Boolean(firstNumber)); // false

console.log("------ Comparison w/ Null and Undefined --------");
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(null != undefined); // false
console.log(null !== undefined); // true

console.log("------ Strange Result: null vs. 0 --------");
console.log(null > 0); // false
console.log(null < 0); // false
console.log(null == 0); // false -> null and undefind -> بساوي بعض اما ما بتقارنوا باشي تاني
console.log(null <= 0); // true
console.log(null >= 0); // true

console.log("------ An Incomparable Undefined --------");
console.log(undefined == null); // true
console.log(undefined === "Maslma"); // false

console.log("------ The `if`/`else`/`else if` Statement --------");
if (0 < 1) console.log("0 is less than 1");

const year = 2022;
if (year > 2022) console.log("It has been 2 years since 2022"); // مش راح يطبع
//string برجعوا  prompt and interaction لانو  data type هان مش نفس ال
const userAge = prompt("How old are you?", 18);
if (userAge === 18) console.log("You are 18 years old"); // "18" === 18 -> مش راح يطبع
if (Number(userAge) === 18) console.log("You are 18 years old"); // 18 === 18

if (userAge > 18) {
  // in ( ) we must use an expression
  console.log("You are older than 18");
  console.log("You are " + userAge + " years old");
}

let x = 10;

if ((x = 12) > 10) {
  // (12 > 10)
  console.log("x is greater than 10");
}

if ("") console.log("empty string is here!");

const isProPalestine = true;

if (isProPalestine) {
  console.log("I am a pro-Palestine person!");
} else {
  console.log("I am a !@#$%");
}

isProPalestine
  ? console.log("I am a pro-Palestine person! - from ternary operator")
  : console.log("I am a !@#$% - from ternary operator");

const yearsOfExperience = prompt(
  "How many years of experience do you have?",
  5
);

if (yearsOfExperience >= 6) {
  console.log("You are a senior developer!");
} else if (yearsOfExperience >= 3) {
  console.log("You are an intermediate developer!");
} else {
  console.log("You are a junior developer!");
}

yearsOfExperience >= 6
  ? console.log("You are a senior developer! - Ternary")
  : yearsOfExperience >= 3
  ? console.log("You are an intermediate developer! - Ternary")
  : console.log("You are a junior developer! - Ternary");

const developerLevel =
  yearsOfExperience >= 6
    ? "You are a senior developer! - Ternary"
    : yearsOfExperience >= 3
    ? "You are an intermediate developer! - Ternary"
    : "You are a junior developer! - Ternary";

console.log(developerLevel);
