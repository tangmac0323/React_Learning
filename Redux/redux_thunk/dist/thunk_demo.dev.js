"use strict";

// import { createStore, applyMiddleware } from 'redux';
// import ThunkMiddleware from 'redux-thunk';
// const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware));
// const rootReducer = () => {
// }
var outter_function = function outter_function() {
  console.log("outter_function called"); // const method_function = () => {
  //     console.log("method called");
  // }

  return function return_function() {
    console.log("return_function called");
  };
};

outter_function.method_function = function () {
  console.log("method_function called");
}; // outter_function.prototype.new_method = () => {
//     console.log("new_method called");
// }


outter_function(); //outter_function().inner_function();

outter_function()();
outter_function.method_function();
var outter = new outter_function(); // outter.new_method();

outter.method_function();