package com.mehrez.studentsystem.controller;

import com.mehrez.studentsystem.model.Student;
import com.mehrez.studentsystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/student")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @ResponseStatus(HttpStatus.OK)
    @PostMapping("/add")
    public String add(@RequestBody Student student){
        studentService.saveStudent(student);
        return  student.getName() + " added successfully..";
    }
    @GetMapping("")
    public List<Student> getStudents(){
        return studentService.getStudents();
    }

    @GetMapping("/hello")
    public String hello(){
        return "Besmellah (Backend)";
    }

}



 /*
    (
        async function postStudent(){
            let student= {"name":"Aziz", "address":"monastir, Tunisia"}
            await fetch('http://localhost:8080/student/add',{
                method:"POST",
                headers: {Accept: 'application/json', 'Content-Type':'application/json',},
                body:JSON.stringify(student),
        }).then(res => res.text())
          .then(txt => alert(txt));
    }
    )();
    (
        async function getStudents(){
            await fetch('http://localhost:8080/student').then(res => res.text())
          .then(txt => alert(txt));
    }
    )();

    */
