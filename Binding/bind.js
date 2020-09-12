const mymodule = {
    x: 42,
    getX: function() {
        console.log("calling getX()");
      return this.x;
    }
  };
  
  const unboundGetX = mymodule.getX;
  console.log(unboundGetX()); // The function gets invoked at the global scope
  // expected output: undefined
  
  const boundGetX = unboundGetX.bind(mymodule);
  console.log(boundGetX());
  // expected output: 42