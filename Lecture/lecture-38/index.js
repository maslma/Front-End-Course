// OOP: Object-Oriented Programming
// code style/pattern based on classes/objects.
// constructor functions or classes: blue-print for creating objects.
// classes: syntax sugar for constructor functions with some differences or additional features. in classes we use strict mode by default.
// extends keyword does prototype inheritance for us.
// classes consists of properties (variables) and methods (functions).
// constructor() is a special method gets called when we create an instance of a class.
// super() is for using parent class constructor and methods (this keyword for parent class).
// public, private, protected
// public: accessible from anywhere (class, its sub-classes, and its instances).
// protected: accessible from class and its sub-classes (no enforcement from language-level) - (underscore syntax).
// private: accessible only from class (hashtag syntax).

class Counter {
  static name = "Counter";

  #value = 0; // private-> مسموح نستخدموا بس بنفس الكلاس

  constructor(value) {
    this.#value = value;
  }

  #validateValue(value) {
    if (typeof value !== "number" || value < 0) return false;
    return true;
  }

  increment(value) {
    if (!this.#validateValue(value)) return;
    this.#value += value;
  }

  decrement(value) {
    if (!this.#validateValue(value)) return;
    this.#value -= value;
  }

  reset() {
    this.#value = 0;
  }

  get value() {
    return this.#value;
  }
}

const counter = new Counter(1);

counter.increment(10);
counter.decrement(5);

counter.reset();
counter.increment(5);

console.log(counter.value);

class CounterB extends Counter {
  constructor(value) {
    super(value);
  }
}

class CounterC {
  constructor(value) {
    this.value = value;
  }
}

const counterB = new CounterB(1);
const counterC = new CounterC(1);

counterB.reset();
counterB.increment(3);

console.log(counterB.value);

// بدنا نعرف هاد الكلاس انعمل من كلاس معين ولا لاء بمعنى يرث من كلاس
console.log(counter instanceof Counter);

console.log(counterB instanceof Counter);
console.log(counterB instanceof CounterB);

console.log(counterC instanceof Counter);
console.log(counterC instanceof CounterC);

console.log(Counter.name);

function fromScriptLoader() {
  console.log("Maslma Developer 38");
}
