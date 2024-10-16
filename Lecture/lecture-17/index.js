// interactions in JavaScript automatically convert the data types of their arguments 
// to a string.
console.log("Lecture 17");

let num = 8;
console.log(num, typeof num);
// alert(8);

const userNumber = "20";
console.log(typeof userNumber);

// string conversion
console.log("------ String Conversion --------");
num = String(num);
console.log(num, typeof num);
console.log(String(true), typeof String(true)); // "true"
console.log(String(null), typeof String(null)); // "null"
console.log(String(undefined), typeof String(undefined)); // "undefined"

// numeric conversion
// mathematical operators automatically convert the data type of their operands to numbers.
console.log("------ Numeric Conversion --------");
console.log("6" / 2); //3
console.log(6 * "2"); // 12
console.log("6" - "2"); // 4

console.log("6" + "2", typeof ("6" + "2")); // 62 , string

const userNumberConverted = Number(userNumber);
console.log(userNumberConverted, typeof userNumberConverted);

console.log("------ Numeric Conversion Rules --------");
console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number("8")); //8
console.log(Number("  20  ")); // 20
console.log(Number("1998 - Shawqi")); // NaN
console.log(Number("")); // 0

// boolean conversion
console.log("------ Boolean Conversion --------");
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN)); //false

// if there is anything in the string, it will be converted to true.
console.log(Boolean(" ")); // space -> true
console.log(Boolean("0"));
console.log(Boolean(-0.5));
console.log(Boolean(1));
console.log(Boolean("Shawqi"));

// basic operators and maths
console.log("------ Basic Operators and Maths --------");

console.log(8 % "3"); // 2
console.log("2" ** 3); // 8
console.log(4 ** (1 / 2)); // 2

// string concatenation with binary +
console.log("------ String Concatenation with Binary + ------");

console.log("6" + 8, typeof ("6" + 8));
console.log("6" + "8", typeof ("6" + "8"));
console.log(6 + "8", typeof (6 + "8"));
console.log(6 + 8, typeof (6 + 8));

console.log(2 + 2 * "Shawqi");  //Nan
console.log((2 + 2) * "Shawqi"); //Nan
console.log("2" + 2 * "Shawqi"); //2Nan
console.log("1" + 2 + 2); // 122

// numeric conversion with unary +
console.log("------ Numeric Conversion with Unary + ------");
console.log(+"6", typeof +"6");

const firstNumber = "6";
const secondNumber = "2";

console.log(firstNumber + secondNumber); // 62
console.log(+firstNumber + +secondNumber); // 8

// operator precedence
console.log("------ Operator Precedence --------");
console.log((2 + 5) * 3 ** 2);

// assignment (=) returns a value
console.log("------ Assignment (=) Returns a Value --------");
let x = 20;
let y = 10;
let z = 20 + (y = x + 10);
console.log(z, y);

// chaining assignments
console.log("------ Chaining Assignments --------");
x = y = c = 10 * (2 + x);
console.log(x, y, c);

// modify-in-place operators
console.log("------ Modify-in-Place Operators --------");
x += 80; // x = x + 80
console.log(x);

x -= 20; // x = x - 20
console.log(x);

// increment/decrement operators
console.log("------ Increment/Decrement Operators --------");
console.log(++x);
console.log(--x);

// console.log(++5); // SyntaxError: invalid increment/decrement operand

console.log(x++);
console.log(x);

let a = 1,
  b = 2,
  d = 3;

const f = (a = --b) * (d - (b + 1)) + a; // 1 * 1 +1
console.log(f);

// bitwise operators/comma operator (fun assignment search for it)
