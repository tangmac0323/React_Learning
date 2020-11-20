"use strict";

var OVER_20_PEOPLE = 1;
var LESS_20_PEOPLE = 0;
var NECESSITY = 1;
var CHOICE = 0;
var NECESSITY_PERCENTAGE = 11; //const CHOICE_PERCENTAGE = 89;

var NECESSITY_OVER_20_PERCENTAGE = 4.5;
var CHOICE_OVER_20_PERCENTAGE = 12.3;

var necessity_generator = function necessity_generator(percentage) {
  var rng = Math.random();
  return [NECESSITY, rng < percentage / 100 ? OVER_20_PEOPLE : LESS_20_PEOPLE];
};

var choice_generator = function choice_generator(percentage) {
  var rng = Math.random();
  return [CHOICE, rng < percentage / 100 ? OVER_20_PEOPLE : LESS_20_PEOPLE];
};

var sample_generator = function sample_generator(sample_num) {
  var sample_set = [];
  var target_count = 0;
  var over_20_count = 0;

  for (var i = 0; i < sample_num; i++) {
    var rng = Math.random();
    var sample = [];

    if (rng < NECESSITY_PERCENTAGE / 100) {
      sample = necessity_generator(NECESSITY_OVER_20_PERCENTAGE);
    } else {
      sample = choice_generator(CHOICE_OVER_20_PERCENTAGE);
    }

    if (JSON.stringify(sample) == JSON.stringify([CHOICE, OVER_20_PEOPLE])) {
      target_count += 1;
    }

    if (sample[1] === 1) {
      over_20_count += 1;
    } //console.log(sample);


    sample_set.push(sample);
  } //console.log(target_count);
  //console.log([CHOICE, OVER_20_PEOPLE]);


  return "".concat(target_count / over_20_count, " %");
};

console.time('Sample Generator');
console.log(sample_generator(1000000));
console.timeEnd('Sample Generator');