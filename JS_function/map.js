const double_input_arr = (input_arr) => {

    console.log(Object.prototype.toString.call(input_arr));
    if(!Array.isArray(input_arr)) {
        return;
    }

    return input_arr.map((item) => {
        return item*2;
    });
}


console.log(double_input_arr(1));
console.log(double_input_arr([1,2,3,4,5]));