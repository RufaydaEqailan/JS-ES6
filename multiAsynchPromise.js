let eat = true;
let play = false;
let sleep = true;

let eating = new Promise((sucess, error) => {
  if (eat) {
    sucess("i am eating");
  } else {
    error("not eating");
  }
});

let playing = new Promise((sucess, error) => {
  if (play) {
    sucess("i am playing");
  } else {
    error("not playing");
  }
});

let sleeping = new Promise((sucess, error) => {
  if (sleep) {
    sucess("i ama sleeping");
  } else {
    error("not sleeping");
  }
});

eating.then(
  (resolve) => {
    console.log(resolve);
    playing.then(
      (resolve) => {
        console.log(resolve);
        sleeping.then(
          (resolve) => console.log(resolve),
          (rejected) => console.log(rejected)
        );
      },
      (rejected) => console.log(rejected)
    );
  },
  (rejected) => console.log(rejected)
);
