# test

## JS unit test tool

* JS unit test tool 종류 (20가지 이상)
* Jasmine, Qunit, Mocha, Jest 사용 多
* tool 소개
    * Jasmine(2010 ~ now)
        * JSUnit project
            * JSUnit
                * Java : Junit == JavaScript : JSUnit
                * Java에서 Junit을 쓴다면, JS에서는 JSUnit을 씀
        * 개발 중지, 2009년
        * 자체 assertion O
        * BDD 기반 dev standard testing에 맞는 문법 작성 가능
    * QUnit
        * DOM 직접 조작 application(jQueryr기반) test
        * easy setting, easy testing, async test;promise 기반
    * Mocha
        * Node 기반 back-end applciation test
        * async test;promise 기반
        * assertion
            * 자체 assertion X
            * 외부 assertion O (chai, should.js, expect.js, node core module)
    * Jest
        * React dev test tool

## Mocha

### 1. Mocha 설치
```bash
npm i -D mocha              ## 설치
npx mocha --version         ## 확인
```
* npx
    * 쉽게 실행하게 도와주는 모듈
    * node로 실행할 때 ```node ./node_modules/mocha/index.js```로 해야하는 것을 간편히 ```npx mocha```라고만 해도 실행되게 한다.

### 2. Mocha test case module (.js, .esm) 작성

* [ex01.js](ex01.js) : 테스트할 모듈
    ```js
    exports.hello = () => 'hello world';
    ```
* [test/ex01.js](test/ex01.js) : 테스팅 수행
    * code
        ```js
        const assert = require('assert');
        const { hello } = require('../ex01');

        // hello test
        describe('hello()', function(){
            it('"hello world" 문자열 반환해야 함',function(){
                assert.strictEqual(hello(), "hello world"); // node core module assert 사용
            })
        });
        ```
         * testcase 내의 callback은 lambda사용 X (this등의 문제 생길 수 있음)
    * test
        * testing 에서 실행
        * method
            * ```npx mocha test/ex01``` : 개별적 테스팅 수행
            * ```npx mocha``` : 일괄적으로 테스팅 수행
            * ```npx mocha -r``` : 하부 디렉토리 테스트케이스까지 모두 실행
            * package.json에 scripts test stage 추가 후 테스트시 ```npm test```(:star:)
                ```json
                "scripts": {
                    "test": "npx mocha"
                },
                ```

## Assertion basic

* [ex02.js](ex02.js) : 테스트할 모듈
    ```js
    exports.add = (a,b) => a + b;
    exports.na = () => [2,4,6];

    // constructor(생성자) : no lambda
    exports.X = function(){
    }
    ```
* testing
    * no using mocha
        * [test.ex02_add_strictEqual.js](test.ex02_add_strictEqual.js)
            ```js
            const assert = require('assert');
            const { add } = require('../ex02');

            // not using mocha
            // add test
            try{
                assert.equal(add(10,20)/* actual */,'30'/* expect */);  // ==
                console.log('== : ok');
                assert.strictEqual(add(10,20)/* actual */,'30'/* expect */);    // ===
                console.log('=== : ok');
            } catch(err){
                console.error('fail:',err.message);
            }
            ```
            * assert : exception 발생 - try, catch문 필요
            * strict mode(```===```,```!==```,객체인 경우 동일성 비교)로 assertion 하기
                * 객체 동일성 비교
                    * equal 사용 X, strictEqual 사용 O
                    * notEqual 사용 X, strictNotEqual 사용 O
                * 객체 동질성 비교 (내용 비교)
                    * deepEqual 사용 X, deepStrictEqual 사용 O
                    * deepNotEqual 사용 X, deepStrictNotEqual 사용 O
        * [test.ex02_add_strict.js](test.ex02_add_strict.js)
            * assert불러올 때 strict로 불러오기 ()
                * ```const assert = require('assert').strict```
        * [test.ex02_na_deepEqual.js](test.ex02_na_deepEqual.js) : deep equal testing
        * [test.ex02_X.js](test.ex02_X.js)
    * using mocha ([test/ex02.js](test/ex02.js))