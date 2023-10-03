let eat = true;
let play = false;
let sleep = true;

let eating = () => {
  return new Promise((sucess, error) => {
    if (eat) {
      sucess("i am eating");
    } else {
      error("not eating");
    }
  });
};

let playing = () => {
  return new Promise((sucess, error) => {
    if (play) {
      sucess("i am playing");
    } else {
      error("not playing");
    }
  });
};

let sleeping = () => {
  return new Promise((sucess, error) => {
    if (sleep) {
      sucess("i ama sleeping");
    } else {
      error("not sleeping");
    }
  });
};

const run = async () => {
  try {
    let eatMeesage = await eating();
    console.log(eatMeesage);
    let playMeesage = await playing();
    console.log(playMeesage);
    let sleepMeesage = await sleeping();
    console.log(sleepMeesage);
  } catch (error) {
    console.log(error);
  }
};

run();
