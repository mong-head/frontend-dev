/*
JS Object 1 (object type)
    1. function type : "함수"라고 부름
    2. object type : 보통 JS에서 객체로 부르는 것은 object type 객체를 부름
*/
var Goods = function(price){
    this.price = price;
}

// 생성 방법 1
// 생성자 함수(Number등) 사용

// 기본 내장 함수
var num = new Number(4);
var bool = new Boolean(true);

// 내가 만든 함수
var o1 = new Goods(1000);
o1.name = "둘리";
o1.age = 10;
o1.another = new Object();
o1.another.age = 30;
console.log(o1); // JSON으로 표현

// 생성 방법 2
// {} literal 사용하는 방법 - usually use this
o2 = {};
o2.name = "둘리";
o2.age = 10;
o2.another = new Object();
o2.another.age = 30;
console.log(o2); // JSON으로 표현


// 생성 방법 3 : JSON (Java Script Object Notation)
o3 = {
    name : "둘리",
    age : 10,
    another : {
        name : "마이콜",
        age : 30
    }
};
console.log(o3);

/*
XmlHttpRequest Host 객체(browser)사용해서 통신(AJAX)할 때
*/

var response = '{name : "둘리",age : 10}';
var userVo = eval("("+response+")");
console.log(userVo.name + ":" + userVo.age);