let x = 0;
let myPromise = new Promise((sucess, error) => {
  if (x === 0) {
    sucess("ok");
  } else {
    error("fail");
  }
}).then(
  (resolve) => console.log(resolve),
  (rejected) => console.log(rejected)
);
