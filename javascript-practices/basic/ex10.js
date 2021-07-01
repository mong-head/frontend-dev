/*
Array
*/

// 1. 생성자 함수
console.log("=== 생성자 함수 ===")
var a1 = new Array();
console.log(typeof(a1),a1 instanceof Array);

// array 정의 시 크기 지정 의미 X
// 동적으로 배열 늘어남
var a2 = new Array(10);
a2[100] = 9;                // 유연성
console.log(a2.length);
console.log(a2[11])         // 배열 값 지정 X : undefined

// 초기값 지정 가능
var a3 = new Array(0,1,2,3,4);
console.log(a3);
console.log(a3.length);

// Array vs Object
console.log("=== Array vs Object ===")
console.log("--- 1. Array ---")
var a4 = [];
a4[0] = 10;
a4["1"] = 11;
a4['name'] = 'dooly';       // 배열의 속성으로 들어가고, 배열 길이에는 영향 X
console.log(a4["0"], a4[1], a4['name'], ', length : ', a4.length);
console.log(a4.name);

for(property in a4){
    console.log('prop :', property, ', typeof :', typeof(property), ', value :', a4[property], ', value type :',typeof(a4[property]));
}

console.log("\n--- 2. Object ---")
o4 = {};
o4[0] = 10;
o4["1"] = 11;
o4['name'] = 'dooly';       
console.log(o4["0"], o4[1], o4['name'], ', length : ', o4.length);  // object는 length없음
console.log(o4.name) 

for(property in o4){
    console.log('prop :', property, ', typeof :', typeof(property), ', value :', a4[property], ', value type :',typeof(a4[property]));
}

console.log("\n=================")

a4.forEach(function(e){
    console.log(e);
});

console.log("=== Literal ===")
// literal
var a5 = [
    function() {
        console.log("hello");
    },
    20,
    "javaScript",
    true,
    {
        email : "yujin@gmail.com",
        name : "yujin"
    },
    null,
    undefined
];

a5.forEach(function(e){
    console.log('typeof : ',typeof(e), ';', e);
})
a5[0]();