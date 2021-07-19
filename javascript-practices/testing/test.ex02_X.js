const assert = require('assert').strict;
const { X } = require('../ex02');

// not using mocha

// X container test
try{
    const a = new X();
    const b = new X();
    const c = a;

    assert.equal(a/* actual */,c/* expect */,'fail: a === c');              // success
    //assert.equal(a/* actual */,b/* expect */,'fail: a === b');            // fail
    assert.deepEqual(a/* actual */,c/* expect */,'fail: deepEqual');        // success
    assert.deepEqual(a/* actual */,b/* expect */,'fail: deepEqual');        // success

    b.bar = 'foo';
    assert.notDeepEqual(a/* actual */,b/* expect */,'fail: notDeepEqual');  // success
    console.log('=== : ok');
} catch(err){
    console.error(err.message);
}