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
	var render = function(vo,mode){
		 html = 
				"<li data-no='"+ vo.no +"'><strong>"+ vo.name + "</strong>" +
					"<p>" + vo.message + "</p>" +
					"<strong></strong>" +
					"<a href='' data-no='"+ vo.no + "'>삭제</a>"+
				"</li>";
		
		/* if(mode){
			$("#list-guestbook").append(html);
		} else {
			$("#list-guestbook").prepend(html);
		} */
		$("#list-guestbook")[mode ? "append" : "prepend" ](html);
	}
	var fetch = function(){
		$.ajax({
			url : "${pageContext.request.contextPath }/guestbook/api/list",
			dataType : "json", // 받을 때 format
			type : "get", // 요청 method
			success : function(response) {
				response.data.forEach(function(e){
					render(e,true); // append
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

	</ul>
	<div>
		<button id="btn-fetch">fetch</button>
	</div>

</body>
</html>