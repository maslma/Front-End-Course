console.log("------ Function declarations ------");

// global/outer variable
let greeting = "Hi";
let nameToPrint = "John";

// declaring the function
function print() {
  // local/inner variable
  // shadowing the outer variable
  console.log("AsSalam Alaikum, Danya.");

  let nameToPrint = "Ahmed";

  // modifying the outer variable
  greeting = "AsSalam Alaikum";

  console.log(`${greeting}, ${nameToPrint}!`);
}

console.log("Greeting: ", greeting);

// console.log(nameToPrint); // ReferenceError: nameToPrint is not defined

print(); // calling/executing the function

console.log("Greeting: ", greeting);

console.log("------ Parameters ------");

// input (optional) -> function (action) -> output (optional)

function createGreetingMessage(someone, age = 18) {
  // old JavaScript
  // setting a default value for the parameter (method no. 01)
  // if (someone === undefined) someone = "Haneen";

  // setting a default value for the parameter (method no. 02)
  return `AsSalam Alaikum, ${
    someone || "Anonymous"
  }! You are ${age} years old.`;

  console.log("Done Creating The Message"); // will be ignored because it came after `return`
}

// console.log(someone); // ReferenceError: someone is not defined

createGreetingMessage();
const esraaGreeting = createGreetingMessage("Esraa", 20);
const aboodGreeting = createGreetingMessage("Abood", 25);

console.log(esraaGreeting);
console.log(aboodGreeting);

console.log(console.log("Shawqi"));
console.log(createGreetingMessage("Shawqi", 26));
// createGreetingMessage(true, 10 >= 20);

console.log("------ Check Age ------");

function confirmIsAuthorized() {
  return confirm("Do you have a permission from your parents/lawyers?");
}

function checkIsLegal(age) {
  // if (age >= 18) return true;
  // return confirmIsAuthorized();

  console.log("------ Task 01 --------");
  // return age >= 18 || confirmIsAuthorized();
  return age >= 18 ? true : confirmIsAuthorized();
}

if (checkIsLegal(20)) console.log("Shawqi is legal");
else console.log("Shawqi is not legal");

console.log("------ Check Power ------");

// 2 ** 3 -> 2 * 2 * 2 -> 8

function power(base, exponent) {
  if (base % 1 !== 0 || exponent % 1 !== 0) {
    console.log("Please enter an integer.");
    return null;
  }

  let result = base;

  for (let i = 1; i < exponent; i++) {
    result *= base;
  }

  return result;
}

console.log(power(2, 0.5));
console.log(power(2, 3) === 8);
console.log(power(3, 3));
console.log(power(3, 3) === 27);
