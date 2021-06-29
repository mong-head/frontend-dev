/*
JS Object 4 - prototype 기반 상속
prototype 기반 상속, overriding(객체 script)
*/

var MyObject = function(name,age){
    this.name = name;
    this.age = age;
}

MyObject.prototype.school = "bit";
MyObject.prototype.course = "douzone";
MyObject.prototype.info = function(){
    console.log(this.name + ":" + this.age + ":" + this.school + ":" + this.course);
}

// MyObject 객체 생성
var o1 = new MyObject("yujin",10);
console.log(o1);            // proto까지 보여주지 X
console.log(o1.school);     // __proto__가 가리키는 constructor의 school찾음
o1.school = "multicampus"   // overriding
console.log(o1.school);     // o1의 school
o1.info();

// MyObject 객체 생성 2
var o2 = new MyObject("mong",20);
console.log(o2);            // proto까지 보여주지 X
console.log(o2.school);     // bit
o2.info();                  // prototype가리키는 constructor의 info 실행

// overriding
o2.info = function() {
    console.log("secret")
}
o2.info();                  // overriding 한 o2자기의 info 실행