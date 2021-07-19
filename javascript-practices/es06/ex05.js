/**
 * 5. Arrow Function
 */

const power = function(x){
    return x * x;
}

let numbers = [1,2,3,4,5];

numbers.forEach(function(number){
    process.stdout.write(`${number }:${power(number)}\t`);
});

console.log();

// ex1
const power2 = x => x*x;    // 정의시에도 람다사용가능

numbers.forEach(function(number){
    // 순수 함수 : 입력받고 return 하는 함수
    // let result = ( x => {
    //     return x * x;
    // })(number)

    let result = (x => x * x)(number) //위의 형태와 동일 : 기본이 return - 순수함수

    process.stdout.write(`${number }:${result }\t`);
    process.stdout.write(`${number }:${power2(number) }\t`);
});

// ex2
console.log();
numbers.forEach( number => {process.stdout.write(`${number }:${power2(number) }\t`);})

// ex3 - 여러 행 함수
// [5,3,15,1045,43,92].forEach(e => {
//     if(e%5 === 0){
//         process.stdout.write(`${e}\t`);
//     }
// });

// ex4 - this를 어휘적으로 binding(lexical binding)
const dooly = {
    name: '둘리',
    friends: ['또치','마이콜','도우너','길동','희동이'],
    printFriends: function(){
        // var _this = this;
        // this.friends.forEach(function(f){
        //     console.log(`${_this.name }의 친구 ${f }`) // this가 달라짐
        // });
        this.friends.forEach(f =>{
            console.log(`${this.name }의 친구 ${f }`) // this가 달라지지 않음
        });
    }
}
dooly.printFriends();