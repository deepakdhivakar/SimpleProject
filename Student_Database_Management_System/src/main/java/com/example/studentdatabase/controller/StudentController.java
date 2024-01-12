package com.example.studentdatabase.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.studentdatabase.entities.Student;
import com.example.studentdatabase.service.StudentService;


@RestController
@CrossOrigin("http://localhost:4200")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/save/student")
    public Student saveStudent(@RequestBody Student student) {
        return studentService.saveStudent(student);
    }

    @GetMapping("/get/student")
    public List<Student> getStudents() {
        return studentService.getStudents();
    }

    @GetMapping("/get/student/{studentId}")
    public Student getStudent(@PathVariable Integer studentId) {
        return studentService.getStudents(studentId);
    }

    @DeleteMapping("/delete/student/{studentId}")
    public void deleteStudent(@PathVariable Integer studentId) {
    	studentService.deleteStudent(studentId);
    }

    @PutMapping("/update/employee")
    public Student updateStudent(@RequestBody Student student) {
        return studentService.updateStudent(student);
    }

}