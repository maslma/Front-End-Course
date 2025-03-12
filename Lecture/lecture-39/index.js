console.log("-----------Error and ThrowsError--------");
// Error and ThrowsError
// console.log(x);
try {
  console.log(y);
} catch (error) {
  console.log("Name:", error.name); // ReferenceError -> مش موجود بالذاكرة
  console.log(" Message:", error.message); // y is not defined ->
  console.log("Cause:", error.cause); // cause -> السبب
  console.log("Stack:", error.stack); // كيف ممكن اتبع الايرور زي موقع الايرور
}

function MyErrorF(message) {
  // function body
  this.message = message;
}

class MyErrorC {
  constructor(message) {
    this.message = message;
  }
}

new MyErrorC("Uncaught ReferenceError: x is not defined");
// Built-in Classes -> مبنية من اللغة
// هان عملنا instance من الكلاس Error
const err = new Error("Uncaught ReferenceError: x is not defined");

console.log(err instanceof Error); // true
console.log(typeof err); // object
console.log(err);
console.log(err.message);

// Throw Error -> (retrun Error) تبع البرنامج Exection الخاص بالخطأ بتوقف

function returnSometing() {
  console.log("1."); // يطبع
  return "Something"; // يتوقف البرنامج
  console.log("2.");
}

const result = returnSometing();
console.log(result);
// throw error;
// console.log("3.");

console.log("------------ Error Handling ----------");
// Error Handling -> بدي اعرف اتعامل مع الايرور
function isAuthenticated(user) {
  if (!user) {
    throw new Error("User is not authenticated");
  }

  if (!user.isAuthenticated) {
    throw new Error(`${user.name} is not authenticated`);
  }

  return `${user.name} is authenticated`;
}

// Imagine this is our users form our database
const users = [
  { name: "Maslma", isAuthenticated: true },
  { name: "waseem", isAuthenticated: true },
  undefined,
  { name: "Ahmed", isAuthenticated: false },
];

// forEch -> loop of array -> undefined بترجع
users.forEach((user) => {
  // finally-> Loading من اشهر الاستخدامات الها نعمل
  console.log("Loading started...");
  try {
    // try: to execute a code that may throw an error.
    // بنحط الايرور الي متوقع يطلع بس بدناش نوقف البرنامج
    const result = isAuthenticated(user);
    console.log(result);
  } catch (error) {
    // catch: to handle errors from try block   .
    // هان لكود الي بدو يسير بدل ما نوقف الكود
    console.warn(
      "Hi user! We are sorry to tell you that your action did Something wrong With our website! Here are more details about error:"
    );
    console.error("Erorr:", error.message);
  } finally {
    // console نعطي معلومة في
    console.info(`${users.name} has been processed`);
    console.log("Loading finished!...");
  }
});

console.log("The program is still running");

console.log("----------- Fetching... ----------");
// Example From Real World (Log-in Form):
// 1- Sometimes you will need custom errors.
// So you can create your own error class.

// FetchError -> عارف راح اتعامل مع سيرفر
// هيك بنعمل custome error
class FetchError extends Error {
  status;

  statusText;

  constructor(status, statusText, message, cause) {
    super(message, { cause }); // new Error(message, {cause})
    this.name = "FetchError";
    this.status = status;
    this.statusText = statusText;
  }
}

function fetchSomething(request) {
  if (request === "users" || request === "setting")
    return "Response: Users or Setting";

  // throw new FetchError(
  //   404,
  //   "Not Found",
  //   "What you have requseted dose not exist on our server!",
  //   "Stupid user!"
  // );

  // FetchError هان بدل ما نستخدم
  throw Error("What you have requseted dose not exist on our server!");
}
// Use Error Handling
try {
  // const response = fetchSomething(prompt("Enter your request: "));
  const response = fetchSomething("users");
  console.log(response);
} catch (error) {
  if (error instanceof FetchError) {
    console.warn(" Status Text:", error.statusText);
    console.error(" Message:", error.message);
  } else {
    console.error(" Message:", error.message);
  }
}
console.log("--------- Fetching One and Two -------------");

// ReThrowing هاد عبارة عن  ErrorHandling هاد مش  catch جو throw لما نشوف
const requests = {
  users: { response: "...some users" },
  settings: { response: "...some settings" },
};

function fetchOneThing(request) {
  try {
    const response = request[request].response;
    return response;
  } catch (error) {
    throw new FetchError(
      404,
      "Not Found",
      `What you have requseted (${request}) dose not exist on our server!`,
      error.cause
    );
  } finally {
    console.log("Fetching one thing is finished!");
  }
}

function fetchManyThings(requests) {
  const responses = [];
  for (const request of requests) {
    try {
      const response = fetchOneThing(request);
      responses.push(response);
    } catch (error) {
      // rethrowing -> بدي اعالجو برا fetchManyThings ما بدي اعالجو في
      throw error;
    } finally {
      console.log("Fetching many thing is finished!");
    }
    return responses;
  }
}
// Try and Catch بشكل عام هاد الكود ممكن يطلع ايرور وما بدي الايرور هاد يوقف البرنامج تبعي بستخدم
try {
  const responses = fetchManyThings(["users", "settings", "blogs"]);
  console.log(responses);
} catch (error) {
  if (error instanceof FetchError) {
    console.warn(" Status Text:", error.statusText);
    console.error(" Message:", error.message);
  } else {
    console.error(" Message:", error.message);
  }
} finally {
  console.log("Finished!");
}

console.log("----------- Promises and async/await -----------");

function fromScriptLoader() {
  console.log("Maslma Developer");
}
