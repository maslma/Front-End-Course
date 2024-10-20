/*
- OR Operator (||) Truth Table
A    B    Result
T    T    T
T    F    T
F    T    T
F    F    F

- AND Operator (&&) Truth Table
A    B    Result
T    T    T
T    F    F
F    T    F
F    F    F

- NOT Operator (!) Truth Table
A    Result
T    F
F    T
*/
console.log("Lecture 19");
console.log("------ OR Operator (||) ------");

console.log(true || true); // T
console.log(true || false); // T
console.log(false || true); //T
console.log(false || false); //F

console.log("" || false); // F
console.log(0 || false); // F
console.log(NaN || false); // F
console.log(null || false); // F
console.log(undefined || false); // F

console.log("" || 0 || true || false); // T ->طالما في ترو بتاخذ ترو
console.log("Shawqi" || false); // Shawqi ->  left to right هيا

console.log(0 || "" || 100 || false || null); // 100 -> وبتفحص اول ما يشوف قيمة ترو باخذهاBoolean بتيجي هان بتحول الى
console.log("North Gaza - Jabalia" || 100 || false || true || null); // North Gaza - Jabalia
console.log(false || undefined || "" || 0 || null); // null ->بطبع اخر اشي موجود false هان لما يكون كلهم

const firstName = null;
const secondName = "Maslama";
const userName = firstName || secondName || "Anonymous";

if (userName) {
  console.log(`Free Palestine, ${userName}`);
} else {
  console.log("Also Free Palestine");
}

// const number = 17;

// console.log(Boolean(console.log("Something"))); // F

// number >= 18 || console.log("You are in a university!") || true; // Short Circuit Evaluation طبق قاعدة  commit عشان عبارة عن  console راح يطبع

// if (number >= 18 || number <= 23) {
//   console.log("You are in a university!");
// } else {
//   console.log("I do not know!");
// }

console.log("------ AND Operator (&&) ------");

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(0 && "" && 100 && false && null); // 0 ->  بطبع اول اشيfalse  هان بلاقي
console.log("North Gaza - Jabalia" && 100 && false && true && null);
console.log(true && NaN && undefined && "" && 0 && null);
console.log(true && 100 && "0" && "Gaza Strip");

const number = 19;

if (number >= 18 && number <= 23) {
  console.log("You are in a university!");
} else {
  console.log("I do not know!");
}

console.log("------ NOT Operator (!) ------");
console.log(!true);
console.log(!false);

console.log(!0); // T
console.log(!""); // T
console.log(!NaN); // T

console.log(!100); // F

console.log(Boolean(null)); // F
console.log(!null); //  T
console.log(!!null); // F

console.log(!!undefined); // F

console.log(+"0");
console.log(Number("0"));

console.log(null || (2 && !3) || 4); // 4
console.log(null || (2 && 3) || 4); // 3

const myAge = 26;
const isInUniversity = myAge >= 18 && myAge <= 23;

if (isInUniversity) {
  console.log("You are in a university!");
} else {
  console.log("I do not know!");
}

console.log("------ Nullish Coalescing Operator (??) ------");

let numberOffFollowers;
numberOffFollowers = numberOffFollowers || 0;

console.log(numberOffFollowers);

console.log(Boolean(numberOffFollowers));

const height = 0;
let settingsEnabled = false;

const solution = height ?? "There is no defined height";
const message = settingsEnabled ?? "There is no defined settings";

settingsEnabled = settingsEnabled ?? true;
console.log(settingsEnabled);

console.log(solution);
console.log(message);

console.log(null ?? "" ?? undefined ?? true);
console.log(undefined ?? false ?? "" ?? null);

console.log(null ?? undefined ?? undefined ?? null); // هان برجع اخر قيمة 

const userRate = prompt("How good is Israel? - out of 10");
const userMessage = +userRate ?? 1; // Number بنحول هاد الي رقم بدل ما نكتب  +userRate
console.log(`You rated Israel ${userMessage}/10.`);
