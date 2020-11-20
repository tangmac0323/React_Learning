"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var counter = function counter(str) {
  var charCount = {};
  var frequencyMap = {};
  var frequencyArr = []; // let a_Ascii_code = "a".charCodeAt(0);
  // let z_Ascii_code = "z".charCodeAt(0);
  // count the number of occurrence of each character

  _toConsumableArray(str).forEach(function (c) {
    if (charCount.hasOwnProperty(c)) {
      charCount[c] += 1;
    } else {
      charCount[c] = 1;
    }
  }); //console.log(charCount);
  // for (let i = a_Ascii_code; i <= z_Ascii_code; i++) {
  //   charCount[String.fromCharCode(i)] = 0;
  // }
  // count the frequency of each frequency


  for (count in charCount) {
    if (frequencyMap.hasOwnProperty(charCount[count])) {
      frequencyMap[charCount[count]] += 1;
    } else {
      frequencyMap[charCount[count]] = 1;
    }
  }

  console.log(frequencyMap); //let maxFrequency = 

  for (freq in frequencyMap) {
    frequencyArr.push(frequencyMap[freq]);
  } //console.log(frequencyArr);
  // sort the frequency map 
  // frequencyArr.sort((first, second) => {
  //     //console.log(second-first);
  //     return second - first;
  // })
  //console.log(frequencyArr);


  var count_deletion = 0; // loop the frequency map
  // for ( let i = 0; i < frequencyArr.length; i++ ) {
  //     while( frequencyArr[i] <= frequencyArr[i + 1]) {
  //         frequencyArr[ i + 1] -= 1;
  //         count_deletion += 1;
  //     }
  // }
  //console.log(count_deletion);
}; //counter("aaaabbbbccccdddeef");


var freqCounter = function freqCounter(str) {
  var freqArr = [];
  var deletionCount = 0;
  console.time("freqCounter - init freqArr");

  for (var i = 0; i < 26; i++) {
    freqArr.push(0);
  }

  console.timeEnd("freqCounter - init freqArr");
  console.time("freqCounter - build freqArr");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = str[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      c = _step.value;
      freqArr[c.charCodeAt(0) - 97] += 1;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  console.timeEnd("freqCounter - build freqArr"); //console.log(freqArr);

  console.time("freqCounter - sort"); // sort the frequency array

  freqArr.sort(function (first, second) {
    return second - first;
  });
  console.timeEnd("freqCounter - sort"); //console.log(freqArr);

  console.time("freqCounter - for loop");

  for (var _i = 0; _i < freqArr.length - 1; _i++) {
    while (freqArr[_i] <= freqArr[_i + 1] && freqArr[_i + 1] > 0) {
      freqArr[_i + 1] -= 1;
      deletionCount += 1;
    } // if (freqArr[i] === 0) {
    //     break;
    // }

  }

  console.timeEnd('freqCounter - for loop'); //console.log(freqArr);

  console.log("Delete: ".concat(deletionCount));
};

function solution(s) {
  var occur = [];
  var del = 0;

  for (var i = 0; i < 26; i++) {
    occur[i] = 0;
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = s[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _c = _step2.value;
      occur[_c.charCodeAt(0) - 97] += 1;
    } // sort

  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  occur = occur.sort(function (a, b) {
    return a - b;
  }); // create a set

  var charSet = new Set();
  charSet.add(occur[0]);
  console.time("Solution - for loop"); // iterate through all alphabets

  for (var _i2 = 1; _i2 < 26; _i2++) {
    if (charSet.has(occur[_i2])) {
      while (occur[_i2] && charSet.has(occur[_i2])) {
        occur[_i2] -= 1;
        del += 1;
      }
    }

    if (occur[_i2]) {
      charSet.add(occur[_i2]);
    }
  }

  console.timeEnd("Solution - for loop");
  console.log("Delete: ".concat(del));
  return del;
}

console.time('freqCounter');
freqCounter("zzzzzssssssaaaabbbbccccdddeef");
console.timeEnd('freqCounter');
console.time('solution');
solution("zzzzzssssssaaaabbbbccccdddeef");
console.timeEnd('solution'); // why do you want to join tesla
// what do tesla address you