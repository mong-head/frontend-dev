const ex02 = require('./ex02');

// test func
const ex03 = async(param) =>{
    try{
        const res = await ex02(param);
        console.log(res);
    } catch(err){
        console.error(err.message);
    }
} 

if(require.main == module){
    // success
    ex03('param-data');
    //fail
    ex03('param-error');
    console.log('....waits');
} else {
    module.exports = ex03;
}