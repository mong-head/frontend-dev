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
<script src="${pageContext.request.contextPath }/jquery/jquery-3.6.0.js"
	type="text/javascript"></script>
<script>
	var fetch = function(){
		$.ajax({
			url : "${pageContext.request.contextPath }/guestbook/api/list",
			dataType : "json", // 받을 때 format
			type : "get", // 요청 method
			success : function(response) {
				console.log(response);
				response.data.forEach(function(vo){
					html = 
							"<li data-no='"+ vo.no +"'><strong>"+ vo.name + "</strong>" +
								"<p>" + vo.message + "</p>" +
								"<strong></strong>" +
								"<a href='' data-no='"+ vo.no + "'>삭제</a>"+
							"</li>";
							
					$("#list-guestbook").append(html);
				});
			}
		});
	}
	
	$(function() {
		$("#btn-fetch").click(function() {
			fetch();
		});
		
		// 최초 데이터 가지고오기
		fetch();
	});
</script>
</head>
<body>

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
	<div>
		<button id="btn-fetch">fetch</button>
	</div>

</body>
</html>