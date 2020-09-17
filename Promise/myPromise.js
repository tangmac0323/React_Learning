const [FULLFILLED, REJECTED, PENDING] = [true, false, void 0];

class myPromise {
    
    constructor(executor) {

        if (typeof(executor) != "function") {
            throw new TypeError("MY PROMISE RESOLVER MUST BE A FUNCTION");
        }

        this.callbackQueue = [];
        this.catchCallback = undefined;

        this.state = PENDING;
        this.value = void 0;

        this.justForTestProp = "sup";


        const resolve = (value) => {
            this.value = value;
            this.state = FULLFILLED;
    
            this.callbackQueue.forEach((callback) => {
                this.value = callback(this.value);
            });
            //return this;
        };
    
        const reject = (reason) => {
            this.value = reason;
            this.state = REJECTED;

            //return this;
        };    
        executor(resolve, reject);
    };


    resolve(data) {
        this.value = data;
        this.state = FULLFILLED;

        this.callbackQueue.forEach((callback) => {
            this.value = callback(this.value);
        });
    };

    reject(reason) {
        this.value = reason;
        this.state = REJECTED;

        //return this;
    };    

    then(callback) {
        // if (this.state === PENDING) {
             this.callbackQueue.push(callback);
        // }
        return this;
    };

    catch(callback) {
        this.catchCallback = callback;
        return this;
    }


}

console.log("Start My Promise");

let my_index = 0;


let mypromise = new myPromise((res, rej) => {
    //console.log(res());
    setTimeout(() => {
        console.log("resolve my promise");
        res({sample_output: "my output: " + my_index++});
    }, 1000);
});

mypromise.then(res => {
    console.log(res);
    return res;
})
.then(res => {
    console.log(res);
});




console.log("End My Promise");


console.log("Start Promise");


let index = 0;

const promise = new Promise((res, rej) => {
    setTimeout(() => {
        console.log("resolve the promise");
        res({sample_output: "output: " + index++});
    }, 2000);
});

promise.then( res => {
    console.log(res);
    //return "ABC";
})
.then( res => {
    console.log(res);
})


console.log("End Promise");