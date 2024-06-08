package com.mehrez.studentsystem.repository;

import com.mehrez.studentsystem.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student,  Integer> {

}
