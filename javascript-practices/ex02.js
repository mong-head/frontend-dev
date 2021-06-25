/* 
    변수와 데이터 타입

    1. 기본 타입
        1) number
        2) boolean
        3) string
        4) undefined
    2. 객체

*/

var u; // 선언과 동시에 정의 : var u = undefined; 와 동일
var i = 10;
var b = true;
var s = "Hello World";

console.log("u : " + typeof(u)); // undefined
console.log("i : " + typeof(i)); // number
console.log("b : " + typeof(b)); // boolean
console.log("s : " + typeof(s)); // string

console.log(s.toUpperCase());
console.log(i.toString());
//console.log(u.toString()); // error : undefined는 객체로 만들 수 있는 생성자 부를 수 X'

console.log("=====object=====")

var i2 = new Number(10);

console.log("i2 : " + typeof(i2)); // object
console.log("null : " + typeof(i2)); // object

var f = function(a,b){ return a+b;};
console.log("f : " + typeof(f)); // object