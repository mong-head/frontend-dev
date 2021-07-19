const ex01 = require('../ex01');

describe('ex01',function(done){
    this.timeout(5000); // mocha자체 timeout 시간(2000ms) 늘림
    
    it('should run without error',function(done){
        ex01('param-data',done);
    })
});