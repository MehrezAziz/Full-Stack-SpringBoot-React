import Student from "./Student"
import {useState,useEffect} from "react"

export default function ListStudents(){
    const [students,setStudents]=useState([]);
    const [studentsLength,setStudentsLength]=useState(0);

    useEffect( ()=>{
             fetch('http://localhost:8080/student')
              .then(res=>{
                res.json().then(
                    studentInfo =>{
                        setStudents(studentInfo.reverse());
                        setStudentsLength(studentInfo.length);
                    }
                )
              })
    },[students]);
     
    return (
        <div>
            <h2 className="title">List of students:</h2>
            <div>
            {studentsLength>0 &&  students.map(student=> 
                    <Student key={student.id} {...student} />
                        )
            }
            </div>
        </div>
    )
}