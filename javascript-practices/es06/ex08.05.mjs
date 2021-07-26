/**
 * mixed unnamed, named export
 * 
 * 
 */

const add = function(a, b) {
    return a + b;
};
const subtract = function(a,b){
      return a-b;
};

export {add,subtract}; // not Enhanced Object literal
export default {add: add, subtract: subtract}; // Enhanced Object literal