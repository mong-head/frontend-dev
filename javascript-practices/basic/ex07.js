/*
JS Object 2 (function type)
*/

// 일반 함수 (실행 코드 block이 있는 function)
var myFunction = function() {
    console.log("일반 함수");
}

// 생성자 함수 (관례대로 대문자로 시작)
var MyObject = function(name, age){
    this.name = name;
    this.age = age;
}

var o1 = new MyObject("둘리",10);
var o2 = new MyObject("마이콜",20);

console.log(o1);
console.log(o2);