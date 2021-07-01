# javascript practices

### ex01

console.log("Hello World")

### ex02

* variance
    * type
        * primitive type
            * number type
            * string type
            * boolean type
            * undefined type
        * object type
            * object
            * function (: function type이지만 object)

### ex03

* null vs undefined
    * null : object type
    * undefined : primitive type

### ex04

* lexical scope
    * function scope
        * var
    * block scope
        * const : 상수
        * let : 변수

### ex05

* statement (구문)
    * JS 실행 단위
    * semi-colon(;) : 구문 구분 단위, JS는 같은 줄에 한 구문인 경우 ; 안붙여도 됨

## JS Object

### ex06 

* object type 생성
    1. new (생성자 함수)
    2. {} literal
    3. JSON

### ex07

* function type 생성
    * general function : 소문자로 시작
    * constructor : 대문자로 시작

### ex08

* object의 확장성
    * function type도 확장 가능
    * object아닌 primitive type은 확장 X

### ex09

* prototype
    * prototype기반 상속

## 내장 객체

### ex10 ( 내장 객체 : Array )

* Array
    * 배열의 유연성 : 동적으로 배열 늘어남
    * Object와 거의 유사하지만, Array는 length, forEach를 사용할 수 있음
        * length는 숫자 property에 대해서만 관리
        * forEach도 숫자 property에 대해서만 forEach로 요소를 순회

### ex11 ( 내장 객체 : Array )

* Array
    * constructor 내의 함수
        * concat
        * join
        * pop, push
        * reverse
        * shift
        * slice
        * sort
        * splice
            * 여러 활용가능 : 치환, insert
            * insert함수는 본래 constructor내에 없음 -> 내가 만들기 가능 (extend)

### ex12 ( 내장 객체 : Array )

* extend prototype
    * insert, remove등 Array 기능 확장
    * "this"를 사용할 때는 어떤 것을 가리키는 지 항상 확인하기


## Function

### ex 17

* function constructor 내 함수
    * 호출과 동시에 (dynamical하게) this binding
        * apply
            * this 변경 
            ```js
            f1.apply(o);       // this : o
            ```
        * call
            * this 변경 
            * 함수 variable 함께 지정 가능
            ```js
            f2.call(o,"hi");
            ```
    * 비동기 callback 함수에서의 this binding : js에서 보통 사용
        * bind
            ```js
            // ch05의 tabbox.js
            var tabBox = {
                init: function() {
                    console.log(this); // this : tabBox
                    window.addEventListener("load", this.onWindowLoad.bind(this)); 
                    // onWindowLoad실행시 bind없으면 this element가 window가 됨
                    // 이 함수 객체 내에서 tabBox를 사용하기 위해 bind(this) or bind(tabBox)사용
                },
                onWindowLoad: ~~~
            }
            ```
