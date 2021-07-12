# module ex 01

## module 만들고 사용해보기

* index01
    * App module 구분 X
* index02
    * App module(app.js) 사용
        * App : 모듈 내보내기
            ```js
            module.exports(App)
            ```
        * index02 : 모듈 사용
            ```js
            const App = require('./app.js')
            ```