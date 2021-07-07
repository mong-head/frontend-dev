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
	$(function() {

		$("#create").click(function() {
			const vo = {
				name : "둘리",
				password : "1234",
				email : "dooly@gmail.com",
				gender : "male"
			};

			$.ajax({
				url : "${pageContext.request.contextPath }/api/user",
				dataType : "json", // 받을 때 format
				type : "post", // 요청 method
				contentType : "application/json",
				data : JSON.stringify(vo),
				success : function(response) {
					console.log(response);
				}
			});
		});

		$("#read").click(function() {

			$.ajax({
				url : "${pageContext.request.contextPath }/api/user/1",
				dataType : "json", // 받을 때 format
				type : "get", // 요청 method
				contentType : "application/json",
				success : function(response) {
					console.log(response);
				}
			});
		});

		$("#update").click(function() {
			const vo = {
				name : "둘리",
				password : "1234",
				email : "dooly@gmail.com",
				gender : "male"
			};

			$.ajax({
				url : "${pageContext.request.contextPath }/api/user/10",
				dataType : "json", // 받을 때 format
				type : "put", // 요청 method
				contentType : "application/json",
				data : JSON.stringify(vo),
				success : function(response) {
					console.log(response);
				}
			});
		});

		$("#delete").click(function() {

			$.ajax({
				url : "${pageContext.request.contextPath }/api/user/10",
				dataType : "json", // 받을 때 format
				type : "delete", // 요청 method
				contentType : "application/json",
				data: "password=1234",
				success : function(response) {
					console.log(response);
				}
			});
		});
	});
</script>
</head>
<body>
	<h1>AJAX Test - Restful API</h1>
	<button id="create">create(post)</button>
	<br />
	<button id="read">read(get)</button>
	<br />
	<button id="update">update(put)</button>
	<br />
	<button id="delete">delete(delete)</button>
	<br />
	<div id="data"></div>
</body>
</html>