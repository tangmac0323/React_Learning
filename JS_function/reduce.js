const sum_input_arr = (input_arr) => {

    if (Object.prototype.toString.call(input_arr) != "[object Array]") {
        //console.log(Object.prototype.toString.call(input_arr));
        return;
    }

    function reducer(acc, cur, idx, src) {
        return acc + cur;
    }

    const reducer2 = (acc, cur, idx, arr) => {
        console.log("Acc: " + JSON.stringify(acc) + "\tCur: " + cur + "\tIdx: " + idx );

        let max = Math.max(acc.Max, cur);
        let min = Math.min(acc.Min, cur);
        let count = acc.Count + 1;

        let avg = 0;

        if (count === 1) {
            min = max;
        }

        if (count != 0) {
            avg = (acc.Avg + cur)/count;
        }
        //let avg = (acc.Avg + cur)/acc.Count;

        return {
            Max: max,
            Min: min,
            Avg: avg,
            Count: count
        }

        //return acc + cur * idx;
    }
    

    //console.log(reducer);

    return input_arr.reduce(reducer2, {Max: 0, Min: 0, Avg: 0, Count: 0});
}


console.log(sum_input_arr([2, 3, 4, 5, 6, 7, 8, 9]));