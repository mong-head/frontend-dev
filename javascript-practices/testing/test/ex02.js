const assert = require('assert').strict;
const {add, na, X} = require('../ex02');

describe('ex02',function(){
    // add test
    describe('add(10,20)',function(){
        it('should equal to 30',function(){
            assert.equal(add(10,20),30);
        });

        it("should not equal to '30'",function(){
            assert.notEqual(add(10,20),'30');
        });
    });

    // na test
    describe('na()',function(){
        it('should deeply equal to [2,4,6](as value)',function(){
            assert.deepEqual(na(),[2,4,6]);
        });

        it('should not equal to [2,4,6]',function(){
            assert.notEqual(na(),[2,4,6]);
        });
    });

    // X constructor test
    describe('X()',function(){
        it('equality(a === b)',function(){
            const a = new X();
            const b = a;

            assert.equal(a,b);
        });

        it('not equality(a !== b)',function(){
            const a = new X();
            const b = new X();

            assert.notEqual(a,b);
        });

        it('equantity between a and b',function(){
            const a = new X();
            const b = new X();

            assert.deepEqual(a,b);
        });

        it('not equantity between a and b',function(){
            const a = new X();
            const b = new X();
            b.bar = 'foo';

            assert.notDeepEqual(a,b);
        });
    });
})