# ch07

### 01_jQuery_loading

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