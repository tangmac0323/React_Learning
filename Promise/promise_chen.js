class MyPromise {
    constructor(executor) {
      this.callbackQueue = [];
      this.catchCallback = undefined;

      const resolve = (data) => {
        this.result = data;

        this.callbackQueue.forEach((callback) => {
          this.result = callback(this.result);
        });
      }

      const reject = (error) => {
        if(this.catchCallback) {
          this.catchCallback(error);
        }
      };

      executor(resolve, reject);
    }

    then(callback) {
      this.callbackQueue.push(callback);
      return this;
    }

    catch(callback) {
      this.catchCallback = callback;
      return this;
    }
}

const myPromise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello');
  }, 1000);
}).then((data) => {
  console.log(data);
  return 'ABC';
}).then((data) => {
  console.log(data);
});
