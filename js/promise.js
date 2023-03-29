/*
console.log("-------------------- new Promise() --------------------")
let myPromise = () => {
  return new Promise((resolve, reject) => {
    let a = 1 + 2;
    if (a === 2) resolve("Success!");
    else reject("Failed!");
  });
};

myPromise()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
*/

/*
// the function below with the callback functions works exactly the same way as the promise below
let success = true;

// myCallbackFunction();
console.log("-------------------- myCallbackFunction() --------------------")
function myCallbackFunction(successCallback, failCallback) {
  if (success) {
    successCallback("Thumbs up and it works!");
  } else {
    failCallback({
      name: "Error",
      message: "The function failed!",
    });
  }
}

myCallbackFunction(
  (message) => console.log("Success: " + message),
  (message) => console.log(message.name + " : " + message.message)
);

// myCallbackPromise();
console.log("-------------------- myCallbackPromise() --------------------")
function myCallbackPromise() {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve("Thumbs up and it works!");
    } else {
      reject({
        name: "Error",
        message: "The function failed!",
      });
    }
  });
}

myCallbackPromise()
  .then((message) => console.log("Success: " + message))
  .catch((message) => console.log(message.name + " : " + message.message));
*/

/*
// Promise.all();
// to return a list of promises we use promise.all()
console.log("-------------------- Promise.all() --------------------");
const myFunctionOne = new Promise((resolve, reject) => {
  resolve("myFunctionOne was triggered!");
});

const myFunctionTwo = new Promise((resolve, reject) => {
  resolve("myFunctionTwo was triggered!");
});

const myFunctionThree = new Promise((resolve, reject) => {
  resolve("myFunctionThree was triggered!");
});

Promise.all([myFunctionOne, myFunctionTwo, myFunctionThree]).then((messages) => {
  console.log(messages);
});
*/

// Promise.race();
// In promise.race everything gets triggered but the first one's message will be displayed and it works just like promise.all()
console.log("-------------------- Promise.all() --------------------");
const myFunctionOne = new Promise((resolve, reject) => {
  console.log("console: myFunctionOne was triggered!");
  resolve("myFunctionOne was triggered!");
});

const myFunctionTwo = new Promise((resolve, reject) => {
  console.log("console: myFunctionTwo was triggered!");
  resolve("myFunctionTwo was triggered!");
});

const myFunctionThree = new Promise((resolve, reject) => {
  console.log("console: myFunctionThree was triggered!");
  resolve("myFunctionThree was triggered!");
});

Promise.race([myFunctionOne, myFunctionTwo, myFunctionThree]).then(
  (message) => {
    console.log(message);
  }
);
