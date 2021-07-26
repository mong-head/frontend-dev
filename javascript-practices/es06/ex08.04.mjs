/**
 * named export
 * 
 * exports(CommonJS)와 유사함. 이 module을 import시에 객체 분해 가능
 */

const add = function(a, b) {
    return a + b;
};
const subtract = function(a,b){
      return a-b;
};

// Enhanced Object Literal : o = {a:a,b:function(){]}} 를 o = {a,b(){}}로 할 수 있게 해주는 것
export {add,subtract}; // Enhanced Object Literal이 아니라서 export {add:add, subtract:subtract} 불가능