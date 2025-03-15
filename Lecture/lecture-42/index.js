console.log("------Fetch API and Async/Await----");
/* 
  Review Lecture 41
1-`setTimeOut()`
2-Callbacks and callbacks Hell
3-Promises
4-Promises Chaining `.than()`

*/
const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Fetched");
    } else {
      reject("Error");
    }
  }, 2 * 1000);
});

console.log(promise); // Promise {<pending>}
promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

console.log("----------Mock API----------");
const apiBaseURL = "https://jsonplaceholder.typicode.com";

const h1 = document.getElementById("info");
const h2 = document.getElementById("info-post");
h1.textContent = "Fetching data...";

//GET

fetch(`${apiBaseURL}/users`, {
  method: "GET",
  // headers: {
  //   "Content-Type": "application/json",
  // },
})
  .then((response) => {
    // console.log(response);
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(" 404");
      }
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    h1.textContent = "Fetching data finished successfully";
  })
  .catch((error) => {
    if (error.message === "404") {
      h1.textContent = "Fetching data failed: Resource is not found";
    }
    // console.log("Error From Server", error);
  });
// .finally(() => {
//   h1.textContent = "Fetching data finished";
// });

fetch(`${apiBaseURL}/users`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: "Maslma Alzebda" }),
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    h2.textContent = `User with ID ${data.id} was created successfully`;
  });

/*
if(path === "/users") {
const users = await db.users.find();
return new Response(JSON.stringify(users), {status: 200,
 headers:{"Content-Type": "application/json"}});
}

Back-end developers will tell front-end developers how to consume their APIs.
GET/
*/

//alert() is a web API because it allows us to communicate with a browser
// alert("Fetching data...");

/* 
it`s client/browser/front-end side vs, server/back-end side
-network request: fetching data from a client to a server.
-client does requests to a server and server does responses to a client.

-network request is an HTTP request.
-HTTP request consist of:
1- Requset Line:
1.1 Method: GET, POST, PUT/PATCH, DELETE, etc
1.2 URL: https://www.google.com
1.3 HTTP Version: HTTP/1.1, HTTP/2, HTTP/3

2- Headers: key-value pairs of additional information.
3- Body: data that is sent from a client to a server.

-HTTP response consist of:
1- Response Line: 
1.1 Status Version: HTTP/1.1, HTTP/2, HTTP/3
1.2 Status Code: 200, 201, 404, 500, ect
1.3 Status Message: OK, Created, Not Found, Internal Server Error, ect.

2- Headers: key-value pairs of additional information.
3- Body: data that is sent from a client to a server.

-Status Code Table:
1. 1--: Informational

2. 2--: Success
2.1 200 OK: The "usually GET" request was successful
2.2 201 Created: The "usually GET" request was successful and a new resource 
was created.
2.3 204 No Content: The request was successful but there is no content 
to send back.

3. 3--: Redirection

4. 4--: Client Error
4.1 400 Bad Requset: The request was in-valid or can not be served
4.2 401 Un-Authorized: The request is un-authorized. You do not have permission to
access this resource.
4.3 403 Forbidden: The request is Forbidden. You do not have permission to
access this resource.
4.4 404: Not Found

5. 5--: Server Error
5.1 500 Internal Server Error

/login POST header ... body ...

if (!request.body) return new Response("No Body", {status: 400})
if (requset.user.role !== "admin") return new Response ("Un-Authorized", {status: 403})

const page = await db.pages.find(request.body.pageId)
if (!page) return new Response("Not Found", {status: 404})

REST API are commom example of HTTP requests or network requests.
REST API uses JSON format for data exchange.
Rest API uses HTTP methods to perform actions on a resource.

Back-end developers develop APIs and Front-end developers consume APIs. 
*/

console.log("---------- Async/Await ----------");
async function dataFetching() {
  // const promise = new promise((resolve, reject) => {
  //   resolve(5);
  // }, 1 * 1000);

  try {
    const response = await fetch(`${apiBaseURL}/users`);
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(" 404");
      }
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    if (error.message === "404") {
      console.log("Resource is not found");
    }
  }

  // console.log(1);
  // console.log(2);
  // console.log(3);
}

dataFetching();

console.log("Waiting...");

// dataFetching().then((data) => {
//   console.log(data);
// });
