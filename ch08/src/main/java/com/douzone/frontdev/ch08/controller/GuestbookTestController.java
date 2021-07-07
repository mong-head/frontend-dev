package com.douzone.frontdev.ch08.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

// 렌딩

@Controller
@RequestMapping("/test/gb")
public class GuestbookTestController {

	@RequestMapping("/ex1")
	public String ex1() {
		return "gb/ex1";
	}
	
	@RequestMapping("/ex2")
	public String ex2() {
		return "gb/ex2";
	}
	
}
