console.log("------ Objects ------");
// Primitives Way
const name = "Shawqi Hatem";
const username = "shawqicauses";
const age = 26;
const isSubscribed = true;

// Non-Primitives Way
let user = {
  name: "Maslma Alzebda",
  username: "maslamalzebda",
  email: "me@gmail.com",
  age: 23,
  "Likes JavaScript": true,
  isSubscribed: false,
};

console.log(typeof user);
console.log(user);

// Accessing properties - Dot notation
console.log(typeof user.name);
console.log(user.username);

console.log(typeof user.isSubscribed, user.isSubscribed);

// Adding/Updating/Deleting properties - Dot notation
user.country = "Gaza";
user.isSubscribed = true;
delete user.age;

console.log(user);

// Accessing properties - Brackets notation
// Adding/Updating/Deleting properties - Brackets notation
console.log(user["Likes JavaScript"]);
user["Likes JavaScript"] = false;
delete user["Likes JavaScript"];

console.log(user);

// Empty objects
let emptyObject = {};
let anotherEmptyObject = new Object();
console.log(emptyObject);
console.log(anotherEmptyObject);

// Will understand it later
console.log(Boolean(emptyObject));
// console.log({} === {}); // false

// Key will be converted to string
// let maslma = {
//   1: "100",
//   2: "200",
//   3: "300",
//   true: "true",
// };

// console.log(maslma);

// Computed properties
console.log("------ Computed Properties ------");
console.log(user["name"]);
// console.log(user[email]); // ReferenceError: email is not defined

const key = "email";
console.log(user[key]);

const fruits = {};
const whatTypeOfFruits = prompt("What type of fruits did you buy?", "peach");
fruits[whatTypeOfFruits] = 10;

console.log(fruits);

// Property Value Short-Hand
console.log("------ Property Value Short-Hand ------");

function createUser(name, username, email, isSubscribed) {
  return {
    name, // name: name
    username,
    email,
    isSubscribed,
  };
}

const maslma = createUser(
  "Maslma Alzebda",
  "maslmaalzebda",
  "me@maslma.com",
  true
);

console.log(maslma);

// Property Names Limitations
console.log("------ Property Names Limitations ------");

let limitations = {
  let: "let",
  for: "for",
  return: "return",
};

console.log(limitations);

// Property Existence Test
console.log("------ Property Existence Test ------");

const settings = {
  fontSize: 16,
  fontWeight: 400,
  isDark: undefined,
};

console.log(settings.fontFamily);
// بفحص اذا موجودة او لاء
if (settings.fontFamily === undefined) {
  console.log("`fontFamily` property does not exist! We are adding it now...");
  settings.fontFamily = "Inter";
}

console.log(settings.fontFamily);

console.log("isDark" in settings);
console.log(settings.isDark === undefined);

// The `for...in` Loop
console.log("------ The `for...in` Loop ------");

for (let key in settings) {
  console.log(`${key} is ${settings[key]}`);
}

// Ordered Like An Object
console.log("------ Ordered Like An Object ------");

let whatIsTheOrder = {
  b: "B",
  a: "A",
  2: "C",
  1: "D",
  c: "E",
};

for (let key in whatIsTheOrder) {
  console.log(whatIsTheOrder[key]);
}

// Tasks
console.log("------ Tasks ------");

// 1. Sum all the properties values of the cart object
const cart = {
  fruits: 20,
  vegetables: 10,
  meat: 30,
  bread: 5,
};

let total = 0;

for (let product in cart) {
  // total = total + cart[product]
  total += cart[product];
}

console.log(total);

// 2. Give the customer a discount (- 5) if the price of the product is greater than 10

let totalAfterDiscount = 0;

for (let product in cart) {
  if (cart[product] > 10) {
    // cart[product] -= 5;
    cart[product] = cart[product] - 5;
    totalAfterDiscount += cart[product];
  } else {
    totalAfterDiscount += cart[product];
  }
}

console.log(totalAfterDiscount);

// Object References and Copying
console.log("------ Object References and Copying ------");

let firstName = "Shawqi";
let lastName = firstName;
console.log(`firstName: ${firstName}`);
console.log(`lastName: ${lastName}`);

firstName = "Esraa";
console.log(`firstName: ${firstName}`);
console.log(`lastName: ${lastName}`);

const firstCustomer = { name: "Shawqi Hatem" };
let secondCustomer = firstCustomer;
console.log(firstCustomer);
console.log(secondCustomer);

firstCustomer.name = "Esraa";

console.log(firstCustomer);
console.log(secondCustomer);

// firstCustomer = { name: "Esraa" };
// firstCustomer.name = "Esraa"; // TypeError: invalid assignment to const 'firstCustomer'

console.log({} == {}); // Address الو  Object لانو كل false هان بطبع
console.log(Boolean({})); // true

console.log(firstCustomer === secondCustomer); // true

// Cloning and Merging Objects
console.log("------ Cloning and Merging Objects ------");

// using `for...in`
const firstObject = {
  x: 1,
  y: 2,
  z: 3,
};

const secondObject = {};

for (let key in firstObject) {
  secondObject[key] = firstObject[key];
}

console.log(firstObject === secondObject);

// firstObject.x = 10;
console.log(secondObject);

// using `Object.assign`
const thirdObject = Object.assign({ x: 1 }, firstObject);

console.log(firstObject === thirdObject);
console.log(thirdObject);

// Deep Cloning
console.log("------ Deep Cloning ------");

const firstDeepObject = {
  x: 1,
  y: 2,
  z: 3,
  subObject: {
    a: 1,
    b: 2,
    c: 3,
  },
};

// const secondDeepObject = Object.assign({}, firstDeepObject);
// console.log(firstDeepObject === secondDeepObject);
// console.log(firstDeepObject.subObject === secondDeepObject.subObject);

const secondDeepObject = structuredClone(firstDeepObject);
firstDeepObject.subObject.a = 10;
console.log(secondDeepObject.subObject.a);
console.log(firstDeepObject.subObject === secondDeepObject.subObject);
