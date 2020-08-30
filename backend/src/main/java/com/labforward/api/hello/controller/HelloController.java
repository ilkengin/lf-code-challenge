package com.labforward.api.hello.controller;

import java.util.List;

import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.labforward.api.core.exception.ResourceNotFoundException;
import com.labforward.api.hello.domain.Greeting;
import com.labforward.api.hello.service.HelloWorldService;

@RestController
public class HelloController {

	public static final String GREETING_NOT_FOUND = "Greeting Not Found";

	private HelloWorldService helloWorldService;

	public HelloController(HelloWorldService helloWorldService) {
		this.helloWorldService = helloWorldService;
	}

	@GetMapping("/hello")
	@ResponseBody
	public List<Greeting> allHello() {
		return helloWorldService.getAllGreetings();
	}
	
	@GetMapping("/hello/default")
	@ResponseBody
	public Greeting helloWorld() {
		return getHello(HelloWorldService.DEFAULT_ID);
	}

	@GetMapping("/hello/{id}")
	@ResponseBody
	public Greeting getHello(@PathVariable String id) {
		return helloWorldService.getGreeting(id)
		                        .orElseThrow(() -> new ResourceNotFoundException(GREETING_NOT_FOUND));
	}

	@PostMapping("/hello")
	public Greeting createGreeting(@Validated @RequestBody Greeting request) {
		return helloWorldService.createGreeting(request);
	}
	
	@PutMapping("/hello/{id}")
	public Greeting updateGreeting(@PathVariable String id,@Validated @RequestBody Greeting request) {
		return helloWorldService.updateGreeting(id, request);
	}
}
