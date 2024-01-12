package com.example.studentdatabase.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.studentdatabase.dao.StudentDao;
import com.example.studentdatabase.entities.Student;

@Service
public class StudentService {

    @Autowired
    private StudentDao studentDao;

    public Student saveStudent(Student student) {
        return studentDao.save(student);
    }

    public List<Student> getStudents() {
        List<Student> students = new ArrayList<>();
        studentDao.findAll().forEach(students::add);
        return students;
    }

    public Student getStudents(Integer studentId) {
        return studentDao.findById(studentId).orElseThrow();
    }

    public void deleteStudent(Integer studentId) {
    	studentDao.deleteById(studentId);
    }

    public Student updateStudent(Student student) {
    	studentDao.findById(student.getStudentId()).orElseThrow();
        return studentDao.save(student);
    }
}