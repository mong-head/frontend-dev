// callback
const request01 = function (url, callback) {
  // request01: db.query, $.ajax 와 유사
  console.log("request01 [" + url + "]");

  // DB 통신
  setTimeout(function () {
    // 통신했다고 치고 응답왔다고 가정
    const resp = {
      data: "Hello World1",
    };

    callback(resp);
  }, 1000);
};

// promise
const request02 = function (url) {
  // request02: db.query, $.ajax Promise 객체 return하는 promise화(promify)된 함수
  console.log("request02 [" + url + "]");

  return new Promise(function (resolve, reject) {
    // DB 통신
    setTimeout(function () {
      // 통신했다고 치고 응답왔다고 가정
      const resp = {
        data: "Hello World2",
      };

      // success
      resolve(resp);

      // error
      // reject('fails: request02');
    }, 1000);
  });
};

// async, await
const fetch = async function(url){   // ex) model.findAll, model.insert,... 
    try {
        console.log("request02 [" + url + "]");
        const response = await request02(url); //request02 : promify func
        return response;
    } catch(err) {
        console.log(err);
    }
}

// async 함수 내에서 바로 실행
const index = async function(url){
    const response = await request02(url);
    //render
    console.log(response);
}

// =============================== test ===================================

// callback
request01("http://www.monghead.com/api", function (response) {
  console.log(response);
});

// promise
request02("http://www.monghead.com/api")
  .then(function (response) {
    // then : callback 함수
    console.log(response);
  })
  .catch(function (err) {
    console.error(err);
  });

// async
// const response = fetch("http://www.monghead.com/api");
// response.then(function(resp){console.log(resp)});

index("http://www.monghead.com/api");


console.log('do something')