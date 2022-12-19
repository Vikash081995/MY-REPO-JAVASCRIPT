//------------------sucessfully resolves promise---------------------------------------
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});
promise.then(
  (result) => alert(result)
  // error => alert(error);
);

//--------------rejection of Promise----------------------------------------
let newpromise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

newpromise.then((error) => alert(error));

//---------------------- catch block-------------------------------------
let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});
promise.catch(alert);

// ----------------------finally----------------------------------------
let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
})
  .finally(() => console.log("stop loading indicator"))
  .then(
    (result) => console.log(result),
    (err) => console.log(err)
  );
