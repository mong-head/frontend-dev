# ch07

## 1. [jquery loading](src/main/webapp/01_jQuery_loading.html)

* jQuery 가지고 오기
    ```html
    <!-- 개발소스 version (service server hosting) : 미리 저장되어있음 -->
    <script type="text/javascript" src="./jquery/jquery-3.6.0.js"></script>

    <!-- release version; 압축 버전 (service server hosting) : 미리 저장되어 있음 -->
    <script type="text/javascript" src="./jquery/jquery-3.6.0.min.js"></script>

    <!-- release version(CDN : contents network delivery) : 많이 사용 -->
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    ```
* version 확인
    ```html
    <script>
        console.log($().jquery);	// version
    </script>
    ```

## 2. [HTMLElement 선택](src/main/webapp/02_select_HTMLElement.html)

* 방법 1 : DOM API
    * 굳이 안씀
    ```js
    window.addEventListener("load", function () {
            const $obj = $('#header');

            // 절대 jQuery Object는 null이 될 수 없음
            // 따라서 밑처럼 확인하면 안 됨
            // if($obj != null){
            //     console.log("! 성공");
            // }
            // 이렇게 확인 가능
            if ($obj.length == 1) {
                console.log("1. DOM API : 성공");
            }
        });
    ```
* 방법 2 : jQuery function; selector : document
    * 예전에 유행한 방법
    ```js
        $(document).ready(function () {
            const $obj = $('#header');

            if ($obj.length == 1) {
                console.log("2. jQuery function : 성공");
            }
        });
    ```
* 방법 3 : jQuery function
    * 요즘 많이 사용하는 방법
    ```js
    $(function () {
            const $obj = $('#header');

            if ($obj.length == 1) {
                console.log("3. jQuery function : 성공");
            }
    });
    ```

## 3. jQuery 내부 구조 이해

* [jQuery 구현](src/main/webapp/03_1_use_original_jQuery.html)
* HTMLElement
    * 유사 배열
    * 

## 4. DOM 조작 API

