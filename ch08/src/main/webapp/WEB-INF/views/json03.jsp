<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>  
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="${pageContext.request.contextPath }/jquery/jquery-3.6.0.js" type="text/javascript"></script>
<script>
$(function(){
	const vo = {
		name: "둘리",
		password: "1234",
		message: "안녕"
	};
	
	$("button").click(function(){
		$.ajax({
			url: "${pageContext.request.contextPath }/api/post01",
			dataType: "json",		// 받을 때 format
			type: "post",			// 요청 method
			
			// post 요청 시 보내는 데이터
			// 1. form data format
			contentType: "application/x-www-form-urlencoded",	
			data: $.param(vo),
			
			// 2. JSON format
			/* contentType: "application/json",
			data: '{"name":"유지니","password":"1234","message":"hi"}', */
			
			success: function(response){
				let html = "";
				html += ("<h4>" + response.data.no + "</h4>");
				html += ("<h5>" + response.data.name + "</h5>");
				html += ("<h6>" + response.data.message + "</h6>");
				$("#data").append(html);
			}
		});
	});
});
</script>
</head>
<body>
	<h1>AJAX Test -post data1 (form data format)</h1>
	<button>get data</button>
	<div id="data">
	</div>
</body>
</html>