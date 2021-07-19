# test

## JS unit test tool

* JS unit test tool 종류 (20가지 이상)
* Jasmine, Qunit, Mocha, Jest 많이 씀
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
            * 외부 assertion O (chai, should.js, expect.js)
    * Jest
        * React dev test tool

## Mocha 설치
```bash
npm i -D mocha              ## 설치
npx mocha --version         ## 확인
```
* npx
    * 쉽게 실행하게 도와주는 모듈
    * node로 실행할 때 ```node ./node_modules/mocha/index.js```로 해야하는 것을 간편히 ```npx mocha```라고만 해도 실행되게 한다.

## Mocha test case module (.js, .esm) 작성

* [ex01.js](ex01.js)
    ```js
    exports.hello = () => 'hello world';
    ```
* [test/ex01.js](ex01.js)
    ```js
    exports.hello = () => 'hello world';
    ```