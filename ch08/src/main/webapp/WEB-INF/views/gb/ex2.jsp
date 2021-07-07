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

	/* 	var messageBox = function(){
	 $("#dialog-message").dialog({
	 modal: true,
	 buttons: {
	 "확인": function(){
	 // 확인 버튼 누르면 callback
	 $(this).dialog("close");
	 }
	 }
	 });
	 } */

	$(function() {
		$("#add-form").submit(function(event) {
			event.preventDefault(); // 막기

			if ($("#input-name").val() == "") {
				//alert("이름이 비어있습니다.");
				// alert창 -> dialog 대체
				//messageBox("error","이름이 비어있습니다.");
				$("#dialog-message").dialog({
					modal : true,
					buttons : {
						"확인" : function() {
							// 확인 버튼 누르면 callback
							$(this).dialog("close");
						}
					}
				});

				return;
			}

		});
	});
</script>
</head>
<body>

	<div id="content">
		<div id="guestbook">
			<h1>방명록</h1>
			<form id="add-form" action="" method="post">
				<input type="text" id="input-name" placeholder="이름"> <input
					type="password" id="input-password" placeholder="비밀번호">
				<textarea id="tx-content" placeholder="내용을 입력해 주세요."></textarea>
				<input type="submit" value="보내기" />
			</form>
			<ul id="list-guestbook">

				<li data-no=''><strong>지나가다가</strong>
					<p>
						별루입니다.<br> 비번:1234 -,.-
					</p> <strong></strong> <a href='' data-no=''>삭제</a></li>

				<li data-no=''><strong>둘리</strong>
					<p>
						안녕하세요<br> 홈페이지가 개 굿 입니다.
					</p> <strong></strong> <a href='' data-no=''>삭제</a></li>

				<li data-no=''><strong>주인</strong>
					<p>
						아작스 방명록 입니다.<br> 테스트~
					</p> <strong></strong> <a href='' data-no=''>삭제</a></li>
			</ul>

		</div>
		<div id="dialog-message" title="example" style="display: none">
			<p></p>
		</div>
	</div>
</body>
</html>