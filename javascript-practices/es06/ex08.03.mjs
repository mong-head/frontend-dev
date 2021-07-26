/**
 * named export
 * 
 * exports(CommonJS)와 유사함. 이 module을 import시에 객체 분해 가능
 */
export const add = function(a, b) {
    return a + b;
};
export const subtract = function(a,b){
      return a-b;
};