package com.mehrez.studentsystem.service;

import com.mehrez.studentsystem.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);

    List<Student> getStudents();
}
