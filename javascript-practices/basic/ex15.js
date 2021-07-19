// Date

// 현재시간
var now = new Date();
console.log(now);

// 2021년 6월 29일
var d = new Date(2021,5,29); //month - 1
console.log(d);

// 2021년 6월 29일 12:30:40
var d2 = new Date(2021,5,29,12,30,40); //month - 1
console.log(d2);

// 객체 method
console.log("년도: " + d2.getFullYear() + "\n" +
             "월: " + (d2.getMonth() + 1) + "\n" +
             "일: " + d2.getDate() + "\n" +
             "시: " + d2.getHours() + "\n" +
             "분: " + d2.getMinutes()  + "\n" +
             "초: " + d2.getSeconds() );