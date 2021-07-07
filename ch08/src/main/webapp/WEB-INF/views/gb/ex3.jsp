<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet"
	href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<script src="${pageContext.request.contextPath }/jquery/jquery-3.6.0.js"
	type="text/javascript"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script>
	var fetch = function() {
		$.ajax({
			url : "${pageContext.request.contextPath }/guestbook/api/list",
			dataType : "json", // 받을 때 format
			type : "get", // 요청 method
			success : function(response) {
				console.log(response);
				response.data.forEach(function(vo) {
					html = "<li data-no='"+ vo.no +"'><strong>" + vo.name
							+ "</strong>" + "<p>" + vo.message + "</p>"
							+ "<strong></strong>"
							+ "<a href='' data-no='"+ vo.no + "'>삭제</a>"
							+ "</li>";

					$("#list-guestbook").append(html);
				});
			}
		});
	}

	$(function() {
		$("#btn-fetch").click(function() {
			fetch();
		});

		// live event : 존재하지 않는 element의 event handler를 미리 등록
		// delegation (위임) : document에게 위임시킬거임
		$(document).on("click", "#list-guestbook li a", function() {
			event.preventDefault();
			let no = $(this).data("no");
			$("#hidden-no").val(no);
			
			
			deleteDialog.dialog("open");
		})

		// delete dialog
		const deleteDialog = $("#dialog-delete-form").dialog({
			autoOpen: false, // 바로 자동으로 뜨지 마라
			width: 300,
			height: 220,
			modal: true,		// 뒤에 클릭되지 않게
			buttons: {
				"삭제": function(){
					const no = $("#hidden-no").val();
					const password = $("#hidden-delete").val();
					$.ajax({
						url : "${pageContext.request.contextPath }/guestbook/api/delete/"+no,
						dataType : "json", // 받을 때 format
						type : "post", // 요청 method
						data : "password=" + password,
						success : function(response) {
									if(response.data == -1){
										// password 틀린 경우
										$(".validateTips.error").show();
										return;
									} 
									
									$("#list-guestbook li[data-no=" + response.data + "]").remove();
									deleteDialog.dialog("close");
								}
					 });
				},
				"취소": function(){
					$(this).dialog("close");
				}
			},
			close: function(){
				// 1. password 비우기
				// 2. no 비우기
				// 3. error message 숨기기
				console.log("dialog form data 정리작업")
			}
		})
		
		// 최초 데이터 가지고오기
		fetch();

		// 비동기 : li 만들어지기 전에 이 문장 실행될 수 있음 - live event 필요
		//console.log($("#list-guestbook li a").length) 
	});
</script>
</head>
<body>

	<ul id="list-guestbook">
	</ul>
	<div id="dialog-delete-form" title="메세지 삭제" style="display: none">
		<p class="validateTips normal">작성시 입력했던 비밀번호를 입력하세요.</p>
		<p class="validateTips error" style="display: none">비밀번호가 틀립니다.</p>
		<form>
			<input type="password" id="password-delete" value=""
				class="text ui-widget-content ui-corner-all"> <input
				type="hidden" id="hidden-no" value=""> <input type="submit"
				tabindex="-1" style="position: absolute; top: -1000px">
		</form>
	</div>

</body>
</html>