/**
 * unnamed export(use default)
 * 
 * 이름없는 객체하나를 export 하는 것 : 당연히 객체분해 X
 * module.exports(commonJS)
 */
export default {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a,b){
      return a-b;
  }
};
