package com.labforward.api.hello.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.labforward.api.core.exception.ResourceNotFoundException;
import com.labforward.api.core.validation.EntityValidator;
import com.labforward.api.hello.domain.Greeting;

@Service
public class HelloWorldService {

	public static final String GREETING_NOT_FOUND = "Greeting Not Found";

	public static String DEFAULT_ID = "default";

	public static String DEFAULT_MESSAGE = "Hello World!";

	private Map<String, Greeting> greetings;

	private EntityValidator entityValidator;

	public HelloWorldService(EntityValidator entityValidator) {
		this.entityValidator = entityValidator;

		this.greetings = new HashMap<>(1);
		save(getDefault());
	}

	private static Greeting getDefault() {
		return new Greeting(DEFAULT_ID, DEFAULT_MESSAGE);
	}
	
	public List<Greeting> getAllGreetings() {
		return greetings.values().stream().collect(Collectors.toList());
	}

	public Greeting createGreeting(Greeting request) {
		entityValidator.validateCreate(request);

		request.setId(UUID.randomUUID().toString());
		return save(request);
	}

	public Optional<Greeting> getGreeting(String id) {
		Greeting greeting = greetings.get(id);
		if (greeting == null) {
			return Optional.empty();
		}

		return Optional.of(greeting);
	}

	public Optional<Greeting> getDefaultGreeting() {
		return getGreeting(DEFAULT_ID);
	}

	private Greeting save(Greeting greeting) {
		this.greetings.put(greeting.getId(), greeting);

		return greeting;
	}

	public Greeting updateGreeting(String id, Greeting updatedGreeting) throws ResourceNotFoundException {
		getGreeting(id)
				.orElseThrow(() -> new ResourceNotFoundException(GREETING_NOT_FOUND));
		
		updatedGreeting.setId(id);
		greetings.put(id, updatedGreeting);
		
		return updatedGreeting;
	}
}
