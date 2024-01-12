package com.example.studentdatabase.dao;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.example.studentdatabase.entities.Student;

@Repository
public interface StudentDao extends CrudRepository<Student, Integer> {
}
