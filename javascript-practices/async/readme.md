# 비동기

* testing
    * no mocha
        * [ex01](ex01.js) :
        * [ex02](ex02.js) : return promise
        * [ex03](ex03.js) : ex02 testing
    * mocha
        * [test/ex01](test/ex01.js) : ex01 test
        * [test/ex02](test/ex02.js) : ex02(promise) test
            * core module assert
                ```js
                const assert = require('assert').strict;

                // test
                assert.equal(res,'ok');
                ```
            * chai module
                ```js
                const should = require('chai').should();

                // test
                res.should.equal('ok');
                ```
    