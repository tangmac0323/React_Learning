const rng_for_promise = (res, rej) => {
  let rng_num = Math.random();

  rng_num > 0.5 ? res(rng_num) : rej(rng_num);

  return;
};

const promise_for_test = new Promise(rng_for_promise);

const resolve_handler = (val) => {
  //console.log("resolve number > 0.5: " + val);
  return Promise.resolve("resolve number > 0.5: " + val);
};

const reject_handler = (val) => {
  //console.log("reject number < 0.5: " + val);
  return Promise.reject("reject number < 0.5: " + val);
};

promise_for_test.then(resolve_handler, reject_handler).then(
  (val) => {
    console.log("second resolve promise return => ", val);
  },
  (val) => {
    console.log("second reject promise return => ", val);
  }
);
