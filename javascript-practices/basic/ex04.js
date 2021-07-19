// 변수의 범위 (scope)
// 1. JS는 어휘에서 범위를 알 수 있는 정적 범위 (Lexical scope)이다.
// 2. EC6 이전에는 함수 범위(function scope)만 제공 - 자바처럼 block scope없었음
//      함수 범위 지정 : var keyword 사용 (function내에서)
//      var keyword X : global execution context내에 존재하게 됨 (hoisting)
// 3. EC6 이후에는 block scope도 제공 - 아래의 두 키워드 제공
//      1) let : 변수
//      2) const : 상수

// var
var i = 10;                 // i : global execution context
var f = function(){         // f : global execution context
    var i = 20;             // i : function execution context
    if(true){
        var j = 10;         // j : function execution context
    }
    console.log(j);
    console.log(i);
}
f();
console.log(i);

// let, const
{
    x = 100;    //hoisting 안됨
    let x = 100;
    const PI = 3.14; // JS에서는 const를 많이 쓴다.
}
//console.log(x); //error : 접근이 안됨
