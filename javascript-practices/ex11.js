var colors = ['black', 'white','yellow']
var fruits = ['apple', 'mango', 'banana']

// array method - concat
var a1 = fruits.concat(colors);
console.log(a1);

// array method - join
var a2 = fruits.join(":");
console.log(a2);

// array method - pop,push : stack 지원
var color = colors.pop();
console.log(color);
colors.push(color);
console.log(colors);

// array method - reverse
console.log(fruits);
fruits.reverse()
console.log(fruits);

// array method - shift
var numbers = [4000,8000,3000,5000,1000];
console.log(numbers);
var tmp = numbers.shift();        // 왼쪽 이동
console.log(numbers);
console.log(tmp);                 // 이동시킨 원소

// array method - slice
var numbers2 = numbers.slice(1,4);  // index 1,2,3, 원본 건들지 X
console.log(numbers2);

// array method - sort
console.log(numbers);
numbers.sort();
console.log(numbers);

// array method - splice
// index부터 count개 만큼 원본에서 삭제, 그 후 삭제된 원소를 배열로 반환
console.log(fruits);
var fruits2 = fruits.splice(1,2); //index, count
console.log(fruits);
console.log(fruits2);

var a1 = [0,1,2,3,4];
var a2 = a1.splice(1,3,10); //index1부터 3개 짜르고 그 자리에 10 넣음
console.log(a1, a2);        // [ 0, 10, 4 ] [ 1, 2, 3 ]

// 치환
var a3 = [0,1,2,3,4];
var a4 = a3.splice(1,1,10);
console.log(a3, a4);        // [ 0, 10, 2, 3, 4 ] [ 1 ]

// insert 처럼 사용
var a5 = [0,1,2,3,4];
var a6 = a5.splice(1,0,10); // 하나도 빼지말고 그 자리게 insert
console.log(a5, a6);        // [ 0, 10, 1, 2, 3, 4 ] []

