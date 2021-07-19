/*
Statement (구문) : JS 실행 단위

1. JS 실행단위
2. 구성 요소
    값, 연산자  : 표현식
    주석        : 실행단위이지만 구문 구성해도 실행 X
    예약어      : if, else, for, var, ...
3. 구문의 예
    if, if~else, if~else if~else
    while, do-while, for
    switch
    for~in
    with (deprecated)
    변수 정의 (함수 정의 포함)
4. 공백: token 구분, 쓸데없는거는 무시
5. semi-colon
    원칙적으로 구문 분리 역할
*/

// 필요없는 공백은 무시
price = 20
price   + 10

// ;
// (var s = "hello world" : 대입 연산자 구문) 을 표현식 구문 (expression statement)으로 만드는 역할 함
// 표현식을 실행하게끔 함.
var s = "hello world"; console.log(s);

// 1. 개행은 ;으로 대체된다.
var s = "Hello World"
console.log(s)

// 2. 상황에 따라서는 토큰 분리하는 역할도 하고, ; 역할도 함
a
=
2
+
2

console.log(a);