/*
JS Object 3
*/

var o = {
    "name" : "둘리",
    "age" : 10
}

var f = function(){
    console.log("Hello World");
}

var i = new Number(3);
var i2 = 3;

f();
console.log(o);

console.log("=== 객체의 확장 ===")
o.another = {
    "name" : "micky",
    "age" : 60
}
console.log(o);

// function도 확장가능
f.another = {
    "name" : "micky",
    "age" : 60,
    "info" : function(){
        console.log(this.name);
    }
}
console.log(f.another);
f.another.info()

// 기본 타입은 확장 X, 객체는 가능
i.another = {};
console.log(i); // 됨

i2.another = {};
console.log(i2); //안됨
console.log(i2.another); // undefined