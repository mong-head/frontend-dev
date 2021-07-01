// function 객체 method call

console.log("=== global ===")
var email = "yujin@gmail.com"
global.name = "둘리";               // global 근데 절대 안씀           
console.log(name, global.email);    // 둘리 undefined : "name" 찾을 때 global, variable env에서 찾음. 

console.log("=== function 객체 method : apply ===")
var f1 = function(){
    console.log(this);
}

f1();               // this : global object

// this 바꾸기
var o = {
    name : "마이콜"
}

f1.apply(o);       // this : o

console.log("=== function 객체 method : call ===")
var f2 = function(s){
    console.log(s,this.name);
}
f2.call(o,"hi");
