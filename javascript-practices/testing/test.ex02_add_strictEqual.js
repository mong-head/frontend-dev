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