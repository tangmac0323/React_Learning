function find(ar, rule) {
    for ( const [i, e] of ar.entries()) {
        if (rule(e)){
            return {e, i};
        }
    }

    return {e: undefined, i: -1};
}


let arr = [4, 5, 6];
const {e, i} = find(arr, x=>x%2!=0);



// WAY TOO EASY