const ex02 = (param)=>{
    return new Promise(function(resolve, reject){
        // async func
        setTimeout(()=>{
            param == 'param-data' ? resolve('ok') : reject(new Error('fail'));
        },2000);
    });
}

if(require.main == module){
    // test01 : success test
    ex02("param-data").then((res)=>{
       /* success */ 
       console.log(res);
    });
    
    // test02 : fail test
    ex02("param-error").catch((err)=>{
        /* fail */
        console.error(err.message);
    });
    
    console.log('waits...')
} else {
    module.exports = ex02;
}
