const reducer = function(accumulator, currentValue, currentIndex, array) {
    console.log("current index: " + currentIndex);
    return accumulator + currentIndex;
};


console.log([1,2,3,4,5,6,7].reduce(reducer, 100));