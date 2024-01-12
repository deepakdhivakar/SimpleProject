package com.example.studentdatabase;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class StudentDatabaseManagementSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudentDatabaseManagementSystemApplication.class, args);
		System.out.println("connected..");
	}

}
