const reducer = function(accumulator, currentValue, currentIndex, array) {
    console.log("current index: " + currentIndex + "\t current value: " + currentValue);
    return accumulator + currentValue;
};


console.log([1,2,3,4,5,6,7].reduce(reducer, 100));