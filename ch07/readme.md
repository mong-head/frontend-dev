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

## 4. selector

* [tag, class로 선택](src/main/webapp/05_selector_tag_class.html)
* [id](src/main/webapp/06_selector_id.html)
* [하위](src/main/webapp/07_selector_descendent.html)
* [모두](src/main/webapp/08_selector_all.html)
* [그룹](src/main/webapp/09_selector_group.html)
* [자식](src/main/webapp/10_selector_child.html)
* [형제(인접)](src/main/webapp/11_selector_sibling.html)
* [첫 자식](src/main/webapp/12_selector_first-child.html)
* [속성](src/main/webapp/13_selector_attribute.html)
* filter
    * [first, last](src/main/webapp/14_selector_filter_fitst_last.html)
    * [even, odd](src/main/webapp/15_selector_filter_even_odd.html)
    * [contains, has](src/main/webapp/16_selector_filter_contains_has.html)

## 5. DOM 조작 API

예제 20번 ~ 34번

* text : 태그 내의 내용
* html
* HTMLElement insert
    * prepend : 지정 태그 내용 앞에 insert
    * append : 지정 태그 내용 뒤에 insert
    * before : 지정 태그 앞에 insert
    * after : 지정 태그 뒤에 insert
* HTMLElement 이동
    * prependTo
    * appendTo
    * insertBefore
    * insertAfter
* wrap : 앞 뒤로 태그로 감싸기
* wrapAll : 태그 그룹지어서 감싸기 가능
* replaceWith
* remove : element 제거
* attr : DOM 조작보다는 element 속성 변경
* addClass, removeClass : 많이 사용 - 보통 디자인은 css에서 담당하기에 html에서는 디자인요소 빼고 클래스만 다루는 게 좋음

## 6. PlugIn

* jQuery constructor 내 함수 추가 (jQuery API 추가)

## 7. scroll event

<img src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F998DEF475ADA8B953A" width="30%"/>

* 정확한 공식 : dh = wh + st
* dh <= wh + st + 10 공식 사용
	* 스크롤이 거의 마지막에 내려왔을 때 콘솔 메세지 출력
	* 10을 더하는 거는 딱 맞게 했을 때 못찾을 수 있어서 그럼
