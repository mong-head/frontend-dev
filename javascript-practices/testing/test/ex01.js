const assert = require('assert');
const { hello } = require('../ex01');

// hello test
describe('hello()', function(){
    it('"hello world" 문자열 반환해야 함',function(){
        assert.strictEqual(hello(), "hello world"); // node core module assert 사용
    })
});