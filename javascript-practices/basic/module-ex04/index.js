const dumb1 = require('./dumb_module01');
const dumb2 = require('./dumb_module02');
const dumb3 = require('./dumb_module03');

// 1
console.log(dumb1);  //아무것도 없음

// 2
dumb2();  //module.exports만 들어감
//dumb2.function2(); //error

// 3
console.log(dumb3); // module.exports 안의 내용만 있음
