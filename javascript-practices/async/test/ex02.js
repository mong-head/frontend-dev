const ex02 = require('../ex02');
//const assert = require('assert').strict;
const should = require('chai').should();

describe('ex02()',function(){
    this.timeout(5000);

    it('should be return "ok"',async function(){
        const res = await ex02('param-data');
        //assert.equal(res,'ok');
        res.should.equal('ok');
    });
});