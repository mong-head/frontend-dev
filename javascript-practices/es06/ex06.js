/**
 * 6. Destructuring (구조분해)
 */

// ex1 - basic
const user = {
    firstName: "둘리",
    lastName: "김",
    email: 'dooly@gmail.com'
};
({ firstName, lastName } = user);
console.log(firstName, lastName);

// ex2 - default value
const goods = {
    name: "TV",
    price: 10000,
    stockCount: 30
}

let { name, price, stockCount = 0, soldCount = 0 } = goods;
console.log(name, price, stockCount, soldCount);

// ex3 - different variable names : 구조 분해해야 할 객체의 속성과 변수 이름이 다를 떄
const person = {
    name: '배유진',
    country: 'korea'
}

let { name: fullName, country: place } = person;
console.log(fullName, place);

// ex4 - 내부 객체(Nested Object)구조분해
const student = {
    name: '둘리',
    age: 10,
    scores: {
        math: 79,
        korean: 90,
        science: 100
    }
}
const {
    name: studentName,
    scores: {
        math = 0,
        korean = 0,
        science = 0,
        music = 0
    }
} = student;

console.log(`${studentName}의 성적\n math:${math}, korean:${korean}, science:${science}, music:${music}`)

// ex5 - 함수의 parameter
var averageScore = function({
    name,
    scores: {
        math = 0,
        korean = 0,
        science = 0,
        music = 0
    }
}){
    return `${name }의 평균은 ${(math+korean+science+music)/4}입니다.`
}

console.log(averageScore(student));

// ex6 - 배열의 구조분해
const color = [155,200,87];
[red,green,blue] = color;
console.log(red,green,blue);

// ex7 - 배열의 구조분해 default value
[red=0,green=0,blue=0, alpha=0 ] = color;
console.log(red,green,blue,alpha);

// ex8 - skip values
let [,,colorOfBlue=0] = color;
console.log(colorOfBlue);

// ex9 - swap values
let x = 10;
let y = 20;
console.log(x,y);
let temp = x;
x = y;
y = temp;
console.log(x,y);
[x,y] = [y,x];
console.log(x,y);

// ex10 - ...array spread operator
const rainbow = ['red','orange','yellow','green','blue','indigo','violet'];
let [firstColor, secondColor, ...otherColors] = rainbow;
console.log(firstColor,secondColor,otherColors);

console.log(rainbow);
console.log(...rainbow);

// red:orange:yellow:green
var f = function(...color){
    console.log(color);
    return color.join(":");
}
s = f('red','yellow','blue');
console.log(s);

s = ((...color) => color.join(":"))('bablue','rered');
console.log(s);