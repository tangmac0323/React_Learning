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
    

            return this;
        };
    
        const reject = (reason) => {
            this.value = reason;
            this.state = REJECTED;

            return this;
        };    
        executor(resolve, reject);
    };

    then(callback) {
        return this;
    };

    catch(callback) {
        this.catchCallback = callback;
        return this;
    }


}


let promise = new myPromise((res, rej) => {
    console.log(res());
});