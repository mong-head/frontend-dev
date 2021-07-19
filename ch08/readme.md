# ch08 : AJAX


## SPA (Single Page Application)

* controller
	* GuestbookApiController(:star:) : API
	* GuestbookTestController : mapping
* jsp
	* ex1 : list
		- no 기준의 list를 부분적으로 (3~5개씩) 가져와서 리스트 렌더링 (뒤에 붙임)
		- button event 구현 -> scroll event 로 변경
		- no 기준 동적 query를 repository에 구현
		- template 사용
	* ex2 : add
		- validation(message 기반 dialog plugin)
		- form submit 막기
		- 데이터 하나를 rendering (prepend)
		- template 사용
	* ex3 : delete
		- anchor tag(a tag) 기본 동작 막기
		- live event 
		- form 기반 dialog plugin
		- 응답에 대해서 해당 li element 삭제
		- password 틀린 경우(삭제실패 : no = 0) 사용자에게 알려주는 UI 처리
		- 삭제 성공시( no > 0 ), data-no = 10(예제로 10번) 인 li element 삭제  
* template
	* ejs
		* listitem-template
			* item 하나 추가시 사용
		* list-template
			* 여러 item 추가시 사용