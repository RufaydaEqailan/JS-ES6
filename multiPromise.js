let eat = true;
let play = false;
let sleep = true;

let eating = new Promise((sucess, error) => {
  if (eat) {
    sucess("i am eating");
  } else {
    error("not eating");
  }
}).then(
  (resolve) => console.log(resolve),
  (rejected) => console.log(rejected)
);

let playing = new Promise((sucess, error) => {
  if (play) {
    sucess("i am playing");
  } else {
    error("not playing");
  }
}).then(
  (resolve) => console.log(resolve),
  (rejected) => console.log(rejected)
);

let sleeping = new Promise((sucess, error) => {
  if (sleep) {
    sucess("i ama sleeping");
  } else {
    error("not sleeping");
  }
}).then(
  (resolve) => console.log(resolve),
  (rejected) => console.log(rejected)
);
