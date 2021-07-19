// Array 확장 : prototype 확장 - list method 추가

Array.prototype.insert = function(index, values){
    //console.log(this);  // this : a [1,2,4]
    if(values instanceof Array){
        var _this = this; // if 비동기 처리였다면, 이 that은 block단위 변수가 아닌 closure라고 함수 실행 끝날 때까지 기다려서 계속 남아있는 변수 됨
        values.forEach(function(e){
            _this.splice(index++,0,e);
        });
    } else {
        this.splice(index,0,values);
    }
}

Array.prototype.remove = function(index){
    this.splice(index,1);
}

// list로 사용하기
var a = [1,2,4];
console.log(a);
a.insert(2,3);
console.log(a);
a.insert(2,['a','b']);
console.log(a);

a.remove(2);
console.log(a);

var f = function(param){
    console.log(this, ':' , param);
}
o = {name:"me"};
f.call(o,"yujin");    // this binding, parameter 넣을 수 있음
f.apply(o);           // this binding, parameter 못 넣음