/* null vs undefined */

// var myVar1 = undefined;  // 명시적으로 undefined 대입
var myVar1;                 // 암시적으로 undefined 대입
var myVar2 = null;

console.log(myVar1 + ":" + myVar2);                 // undefined:null
console.log(typeof(myVar1) + ":" + typeof(myVar2)); // undefined:object
console.log(myVar1 == myVar2);                      // true : value 비교 (undefined value : null)
console.log(myVar1 === myVar2);                     // false : type 비교

console.log("================ equality : value 비교 ================")

// == : equality
console.log(4 == "4");                      // true
console.log(true == 1);                     // true
console.log("abc" == new String("abc"));    // true

// 형변환
console.log(true + 10);
console.log('abc' + new String('abc'));
console.log(1 + "1");
console.log("1" +1);

console.log("================ identity : type 비교 ================")

// === : identity ; 객체 및 타입의 동일성 , 형변환 없음 
// 1. 타입의 동일성
console.log(4 === "4");                     // false
// 2. 값의 동일성 또는 객체의 동일성
console.log(2 === 1);                       // false : 값 동일 X
console.log(new Number(4) === new Number(4))// false : 객체 동일 X
console.log("abc" === new String("abc"));   // false : 객체 동일 X
// 3. 형변환 x
console.log(true === 1);                    // false


console.log("================ 추천 : 엄격하게 형변환해서 두 피연산자의 타입을 맞춰줌 ================")
// typescript를 쓰면 알아서 엄격하게 지키게 해줌

var str = "5";
console.log(parseInt(str) == 5);