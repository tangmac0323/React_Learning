function failureCallback() {
    console.log("failed");
}

function doThirdThing(res, func, rej) {
    if (res) {
        const result = res + " [again]";
        func(result);
    }
    else{
        rej();
    }
}

function doSomethingElse(res, func, rej) {
    if (res) {
        const result = res + " [else]";
        func(result);
    }
    else {
        rej();
    }
}

function doSomething(res, rej) {

    const result = "do something";

    res(result);
    //console.log("do something")
}

doSomething(function(result) {
    doSomethingElse(result, function(newResult) {
      doThirdThing(newResult, function(finalResult) {
        console.log('Got the final result: ' + finalResult);
      }, failureCallback);
    }, failureCallback);
  }, failureCallback);


  