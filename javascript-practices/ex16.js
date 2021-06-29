/*
function type 객체
*/

// 함수 생성 방법 1
function f1(a,b){
    return a+b;
}
console.log(typeof(f1),f1(10,20));

// 함수 생성 방법 2 : good, literal
var f2 = function(a,b){
    return a+b;
}
console.log(typeof(f2),f2(10,20));

// 함수 생성 방법 3 : new 연산자 
var f3 = new Function("a","b","return a+b;");
console.log(typeof(f3),f3(10,20));

// 함수 생성 방법 4 : anonymous - 한번만 쓸 때, callback시 많이 사용
// callback
// var f4 = function(){
//     console.log("time out");
// }
// setTimeout(f4,1000);
setTimeout(() => {
    console.log("time out");
}, 4000);

// 즉시 실행하는 함수 : 결과만 중요하고 그 과정에 생기는 부수적인 변수들 없애기 위해 사용
var s = (function(a,b){
    return a+b;
})(10,20);

console.log(s);

var sum = function() {
    var s = 0;
    // arguments : 유사 배열 (not real 배열)

    // // 구현 1
    // for(var i= 0; i<arguments.length;i++){
    //     s += arguments[i];
    // }

    // 구현 2 (Array.prototpye.forEach + caller 바꾸기)
    Array.prototype.forEach.call(arguments, function(e){
        // this가 바뀜
        s += e;
    })
    return s;
}

// 가변 파라미터
console.log(sum(1,2));
console.log(sum(1,2,3,4));
console.log(sum(1,2,3,4,5,6));
