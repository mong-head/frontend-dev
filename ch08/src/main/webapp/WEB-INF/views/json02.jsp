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
//  DOM Load Event
// 1. load : all (DOM, CSSom, Image) 완료
// 2. DOMContentLoaded : DOM만 다 완성 (CSS x, Image x)
window.addEventListener("DOMContentLoaded",function(){
	document
		.getElementsByTagName("button")[0]
		.addEventListener("click",function(){
			
			let xhr = null;
			if(window.ActiveXObject){
				// <= IE6
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			} else if(window.XMLHttpRequest){
				// other standards and IE7+
				xhr = new XMLHttpRequest();
			} else {
				console.log("Ajax 불가");
				return;
			}
			
			xhr.addEventListener("readystatechange",function(){
				if(this.readyState == XMLHttpRequest.UNSET){
					// request 초기화 전
					console.log("state : UNSET", this.readyState);
				} else if(this.readyState == XMLHttpRequest.OPENED){
					// server connection success
					console.log("state : OPENED", this.readyState);
				} else if(this.readyState == XMLHttpRequest.HEADER_RECEIVED){
					// server : get request
					console.log("state : HEADER_RECEIVED", this.readyState);
				} else if(this.readyState == XMLHttpRequest.LOADING){
					// response 처리 중
					console.log("state : LOADING", this.readyState);
				} else if(this.readyState == XMLHttpRequest.DONE){
					// response 처리 완료
					console.log("state : DONE", this.readyState);
					
					if(this.status != 200){
						console.error(this.status);
						return;
					}
					
					//const response = eval("("+this.responseText+")")
					const response = JSON.parse(this.responseText);
					//console.log(this.responseText);
					//console.log(response.data.no);
					
					let html = "";
					html += ("<h4>" + response.data.no + "</h4>");
					html += ("<h5>" + response.data.name + "</h5>");
					html += ("<h6>" + response.data.message + "</h6>");
					$("#data").append(html);
				} 
			});
			xhr.open("GET", "${pageContext.request.contextPath }/api/json");
			xhr.send(null);	// get : 보낼 data 없음
			
		});
	
});
</script>
</head>
<body>
	<h1>AJAX Test - XmlHttpRequest</h1>
	<button>get data</button>
	<div id="data">
	</div>
</body>
</html>