// Example From Other OOP Languages
// 1. you need to create a class.
class Something {
  // Fields and Methods
}

// 2. you need to create an instance from that class.
const mySomething = new Something();

// this is not an object in most programming languages.
let object = {};

// In JavaScript We Use Constructor Function
function SomethingF() {}

const otherSomething = new SomethingF();

// OOP
// my code style or design pattern will be based on constructor functions (classes) and objects (instances).

const user = {
  login() {
    console.log("Logging in...");
  },
  signup() {
    console.log("Signing up...");
  },
  deleteAccount() {
    console.log("Deleting account...");
  },
};

const admin = {
  deleteUser() {
    console.log("Deleting user...");
  },
};
// الوراثة في جافا سكريبت
admin.__proto__ = user;
admin.login();

const superAdmin = {};
superAdmin.__proto__ = admin;

superAdmin.signup();
superAdmin.deleteUser();
// ما بنفع يكون عندي اعادة في الوراثة
// user.__proto__ = superAdmin; // TypeError: Cyclic __proto__ value

let errorMethods = {
  logErrorCode() {
    console.log(this.code);
  },
  logErrorMessage() {
    console.log(this.message);
  },
};

// Constractor -> Return بعدها بتعمل , Objects لل Assgin بتعمل يعدها , EmptyObjects بتعمل اول اشي
function HTTPError(code, message) {
  this.code = code;
  this.message = message;

  // something = "Hi";
  // console.log(something);
}

HTTPError.prototype = errorMethods;

console.log(HTTPError.prototype.constructor);
console.log(HTTPError.prototype.constructor === Number);

const errorNotFound = new HTTPError(404, "Could not find your requested page.");

const errorServer = new HTTPError(500, "Something went wrong.");

const unauthorized = new HTTPError(
  401,
  "You are not authorized to perform this action."
);

console.log(errorNotFound);
console.log(errorServer);
console.log(unauthorized);

// . هان بتتنفذعلى حسب قبل
errorNotFound.logErrorMessage();
errorServer.logErrorMessage();
unauthorized.logErrorMessage();

console.log("----------------- Class --------------");
// Classes -> Function هو عبارة عن  , Constractor نفس ال
class Component {
  // Class Field
  props = "This is my props";

  constructor(type) {
    console.log("Hello from constructor function.");
    this.type = type;

    // otherThing = "Other Hi!";
  }

  set content(value) {
    this._content = value;
  }

  get content() {
    return this._content;
  }

  // Method
  printDetails() {
    console.log(`Type: ${this.type} - Content: ${this._content}`);
  }
}

// Object
const component = new Component("<p>");
component.content = "Content has been updated by a setter";

console.log(component.content);
console.log(component.props);
component.printDetails();

console.log(component);
console.log(typeof Component); // function

let OtherComponent = class {
  constructor(type) {
    console.log("Class Declaration");
    this.type = type;
  }
};

const otherComponent = new OtherComponent("<section>");
console.log(otherComponent);

console.log("----------------- Inheritance --------------");
// Inheritance
class Device {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
  }

  printInfo() {
    console.log(this.name, this.description, this.price);
  }
}

// 1. extending a class
class Mobile extends Device {
  //   2. adding parent class' arguments
  constructor(name, description, price, width, height) {
    // 3. using super to call parent class' constructor
    super(name, description, price);
    this.width = width;
    this.height = height;
  }

  printMobileInfo() {
    super.printInfo();
    console.log(this.price, this.width, this.height);
  }
}

// Mobile.prototype.__proto__ = Device.prototype;

console.log("1", Device.prototype);
console.log("2", Mobile.prototype);

const iPhone = new Mobile("iPhone 11", "It is");
