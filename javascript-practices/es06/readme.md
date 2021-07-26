# ES6

## 1. Block Scope variable

* info
    * lexical environment
    * block 단위
* 종류
    * let : ex01
        * 변수
    * const : ex02
        * 상수
        * 값 변경 불가

## 2. Template literal (ex03)

* backtick (``` ` ` ```)
    * string interpolation(``` ${ } ```) 사용가능
    * multi-line string
    ```js
    console.log(`no:${no },
    name:${name },
    email:${email }`)
    ```
* string interpolation
    * ``` ${ } ```
    * 변수 사용 가능

## 3. default parameter (ex04)

* default parameter 지원
    * 호출시 변수 주지 않아도 default value 넣어줌
    ```js
    const print = function (strs, e='\n') {
        console.log(strs.join(e));
    }
    ```

## 4. Arrow function (ex05)

* arrow function?
    ```js
    var number = 1;
    // ES6 이전
    const power = function(x){
        return x * x;
    }
    power(number);

    // ES6 이후 : arrow function
    let result = (x => x * x)(number)
    ```

* 특징
    * 순수 함수
        * input -> output (return 존재)
    * this를 어휘적으로 binding(lexical binding)
    ```js
    printFriends: function(){
        // var _this = this;
        // this.friends.forEach(function(f){
        //     console.log(`${_this.name }의 친구 ${f }`) // this가 달라짐
        // });
        this.friends.forEach(f =>{
            console.log(`${this.name }의 친구 ${f }`) // this가 달라지지 않음
        });
    }
    ```

## 5. Destructing (구조분해) (ex06)

* destructing
    * array, object 속성 해체후, 그 값을 개별 변수에 담을 수 있게 함
    * object 구조 분해
        * 구조 분해시 본문에서 사용할 이름 변경 가능
            ```js
            const person = {
                name: 'mong',
                country: 'korea'
            }
            let { name: fullName, country: place } = person;
            console.log(fullName, place);
            ```
        * 내부 객체(nested object) 구조 분해 가능
            ```js
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
            ```
    * array 구조 분해
        ```js
        const color = [155,200,87];
        [red,green,blue] = color;
        console.log(red,green,blue);
        ```
        * swap 가능
            ```js
            [x,y] = [y,x];
            ```
        * array spread operator (``` ... ```)
            ```js
            const rainbow = ['red','orange','yellow','green'];
            let [firstColor, secondColor, ...otherColors] = rainbow;
            console.log(firstColor,secondColor,otherColors); // red, orange, ['yellow','green']
            ```

## 6. 비동기 (async)

## 7. class ([ex07](ex07.js))

* class
    * constructor 필수
        * super() 호출 필수
* extends(상속)
    * overriding

* ex
    ```js
    class Shape {
        constructor(bg,ln){
            this.bg = bg;
            this.ln = ln;
        }

        draw(){
            console.log('도형을 그릴 수 없음')
        }
        area(){
            console.log('넓이 못 구함')
        }
    }

    class Triangle extends Shape {
        constructor(bg,ln,w,h){
            super(bg,ln);
            this.w = w;
            this.h = h;
        }

        // override
        draw(){
            console.log(`Triangle: (bg:${this.bg},ln:${this.ln},w:${this.w},h:${this.h})`)
        }
    }

    const tr01 = new Triangle('red','yellow',10,20);
    tr01.draw();
    ```

## 8. module export

* ex08.mjs ([ex08.mjs](ex08.mjs))
    * testing 공간

* export default
    * 특징
        * 객체 분해 X
        * 딱 하나만 가능
        * module사용시 : ```import unnamedFunction from './ex08.01.mjs';```처럼 이름 명시해야함
    * ex
        * function([ex08.01.mjs](ex08.01.mjs))
        * object([ex08.02.mjs](ex08.02.mjs))

* export module with name
    * 특징
        * 객체 분해 가능 : ```import {subtract} from './ex08.04.mjs';```
        * module 사용시 : 이름 명시하려면 ```import * as namedFunctions from './ex08.03.mjs';```이렇게 해야함
    * ex
        * [ex08.03.mjs](ex08.03.mjs)
        * [ex08.04.mjs](ex08.04.mjs)
* mixed export
    * 사용 : ```import math,{add} from './ex08.05.mjs';```
    * ex
        * [ex08.05.mjs](ex08.05.mjs)