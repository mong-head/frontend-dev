const assert = require('assert').strict;
const { na } = require('../ex02');

// not using mocha

// na test
try{
    assert.deepEqual(na()/* actual */,[2,4,6]/* expect */,'fail: deepEqual');
    assert.equal(na()/* actual */,[2,4,6]/* expect */,'fail: equal');
    console.log('=== : ok');
} catch(err){
    console.error(err.message);
}