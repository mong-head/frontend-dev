// URL 문자열 다루기

var url = "http://www.mysite.com/user?name=둘리&no=10";

// 1. escape() : URL 전부 encoding, 잘 안씀, deprecated
var url2 = escape(url);
console.log(url2);

// 2. encodeURI : parameter 부분만 encoding - 쓸만함
var url3 = encodeURI(url);
console.log(url3);

// 3. encodeURIComponent : 값만 encoding
var url4 = encodeURIComponent(url); // 안좋은 예
console.log(url4);


// 이렇게 url만들어야함
// http://mysite.com/user?no=10&name=배유진&email=yujin@gmail.com


// 데이터 이렇게 왔다고 가정
var param = {
    no : 10,
    name : '배유진',
    email : 'yujin@gmail.com'
}

var toQueryString = function(o){
    var qs = [];
    for(props in o){
        //console.log(props+'='+encodeURIComponent(o[props]));
        qs.push(props+'='+encodeURIComponent(o[props]));
    }
    return qs.join("&")
}

var url = "http://mysite.com/user";
var url5 = url + "?" + toQueryString(param);
console.log(url5);