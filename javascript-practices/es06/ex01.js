/* let: Block scope 변수 정의 */ 

try{
    if(true){
        var i = 10;     // variance environment - fuction 단위
        let j = 20;     // lexical environment - block 단위
    }

    console.log('i',i);
    console.log('j',j);
} catch(e){
    console.error(e);
}

// var 함수 범위
try{
    var f = function(){
        var m = 20;
    }
    
    f();
    console.log(m);
} catch(e) {
    console.error(e);
}