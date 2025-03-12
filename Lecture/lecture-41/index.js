console.log("----------- async/sync -----------");

/* 
Sync            Async
1               5 (2000 ms)
2               loadScript (2 ms)
3
4
6
7
loadScript
5
*/

// Synchronous Code -> الكود الي بتنفذ كوماند بعد كوماند
console.log("1");
console.log("2");
console.log("3");

// ASynchronous Code -> كود غير متزامن
console.log("4");
// بتنفذ كود بعد مدة معينة ملي ثانية
// Callback Function : is a function that is passed as an argument
// to anther function. We are not calling it immediately or manually.
// 1 second = 1000 milliseconds

// move this code to execute in background.
// setTimeout(() => {
//   console.log("5");
// }, 0 * 1000);

console.log("6");

function loadScript(src, afterLoad) {
  // we are using JavaScript to update our HTML markup
  // We are creating a script element
  const script = document.createElement("script");
  script.src = src;
  document.head.append(script);
  script.onload = () => afterLoad(null, script); // بعد ما تخلص تحميل نفذ
  // Handling Errors
  script.onerror = () => {
    const error = new Error("Error lodaing script!");
    afterLoad(error, null);
  };
}

// 1- wait 5 seconds
// 2- load (request) JS script
// 3- execute JS script
// this is async code
// setTimeout(() => {
// }, 5000);

loadScript("../lecture-390/index.js", (error, script) => {
  if (error) {
    console.log(error);
    return;
  }

  fromScriptLoader();
  // Callback Hell!-> لو بدي احمل بعد محاضرة 39 بنعمل هيك
  loadScript("../lecture-38/index.js", (error, script) => {
    if (error) {
      console.log(error);
      return;
    }
    fromScriptLoader();
  });
});

console.log("7");

console.log("----------- Promises -----------");
// producing code => code that produces a promise because it is an async and
//takes time to complete.
// consuming code => code that consumes a producing code.
// promise is an object that links producing code and consuming code.

function ask() {
  const lodaing = document.getElementById("loading");
  lodaing.textContent = "Loading...";
  const input = Number(prompt("Enter a number between 1 and 10:"));

  const promise = new Promise((resolve, reject) => {
    // Note :
    // 1- pending -> لما تكون فاضية
    // 2- fulfilled -> resolve لما يكون موجود
    // 3- reject -> reject لما يكون موجود

    setTimeout(() => {
      if (input > 5) {
        resolve("Done");
      } else {
        reject(new Error("Input is too small!"));
      }
    }, 4 * 1000);
    // reject(new Error("Rejected!"));
  });

  promise
    // fulfilled
    .then((result) => {
      console.log(result);
    })
    // rejected
    .catch((error) => {
      console.error(error);
    })
    // Settled -> (fulfilled or rejected)
    .finally(() => {
      lodaing.textContent = "Promise is done!";
    });

  // Seconde Way
  // promise.then(
  //   (result) => {
  //     console.log(result);
  //   },
  //   (error) => {
  //     console.error(error);
  //   }
  // );
}
// ask();

function scriptLoaderPromise(src) {
  const promise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    document.head.append(script);

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error("Error loading script!"));
  });
  return promise;
}

scriptLoaderPromise(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
)
  .then((script) => {
    console.log(script);
  })
  .catch((error) => {
    console.error(error);
  });

console.log("----------- Chaining Promises -----------");

const numericPromise = new Promise((resolve, reject) => {
  resolve(1);
});

numericPromise
  .then((result) => {
    console.log(result);
    return result + 1;
  })
  .then((result) => {
    console.log(result);
    return result + 1;
  })
  .then((result) => {
    console.log(result);
    return result + 1;
  });

console.log("----------- Fetch -----------");
// Fetch
// Mock API call
// fetch is used to make HTTP requests.
// HTTP requests are used to get data from a server.
// server is a remote computer that has data.
//
let promise = fetch("https://jsonplaceholder.typicode.com/users", {
  headers: {
    "Content-Type": "application/json",
  },
});
promise.then((response) => {
  return response.json().then((data) => {
    console.log(data);
  });
});
