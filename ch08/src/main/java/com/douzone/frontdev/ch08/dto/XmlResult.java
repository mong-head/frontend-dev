package com.douzone.frontdev.ch08.dto;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="response")
public class XmlResult {
	private String result; /* "success" or "fail" */
	private GuestbookVo data;  /* if success, Data Set (else null) */
	private String message; /* if result==fail, message set (else null) */
	
	//밖에서 만들지 못하게 함
	private XmlResult() {
		
	}
	private XmlResult(GuestbookVo data) {
		result = "success";
		this.data = data;
		this.message = null;
	}
	
	private XmlResult(String message) {
		result = "fail";
		this.data = null;
		this.message = message;
	}
	
	public String getResult() {
		return result;
	}
	public void setResult(String result) {
		this.result = result;
	}
	public GuestbookVo getData() {
		return data;
	}
	public void setData(GuestbookVo data) {
		this.data = data;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public static XmlResult success(GuestbookVo data) {
		return new XmlResult(data);
	}
	
	public static XmlResult fail(String message) {
		return new XmlResult(message);
	}

	@XmlRootElement(name="data")
	public static class GuestbookVo {
		private long no;
		private String name;
		private String password;
		private String regDate;
		private String message;
		
		public long getNo() {
			return no;
		}
		public void setNo(long no) {
			this.no = no;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public String getRegDate() {
			return regDate;
		}
		public void setRegDate(String regDate) {
			this.regDate = regDate;
		}
		public String getMessage() {
			return message;
		}
		public void setMessage(String message) {
			this.message = message;
		}
		
		@Override
		public String toString() {
			return "GuestbookVo [no=" + no + ", name=" + name + ", password=" + password + ", regDate=" + regDate
					+ ", message=" + message + "]";
		}
	}
}
