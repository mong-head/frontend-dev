const ex01 = (param,callback) => {
    // 비동기
    // ex) file system 접근 , network 통신, SQL to DB, setTimeout
    setTimeout(()=>{
        param == 'param-data' ? callback(null,'ok') : callback(new Error('fail'));
    },2000);
}

if(require.main == module){
    // test01 : success test
    ex01("param-data",(err,res)=>{
        err == null ? /* success */ console.log(res) : /* fail */console.error(err.message);
    });

    // test02 : fail test
    ex01("param-error",(err,res)=>{
        err == null ? /* success */ console.log(res) : /* fail */console.error(err.message);
    });

    console.log('waits...')
} else {
    module.exports = ex01;
}