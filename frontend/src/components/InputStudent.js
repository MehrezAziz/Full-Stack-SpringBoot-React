import React,{ useState ,useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Student() {
    const [name,setName]=useState("");
    const [address,setAddress]=useState("");

   
    const addStudent= async(e)=>{
        e.preventDefault();
        if(name!=="" && address!=="" )
            {
                let student={name,address};
                let res=
                await fetch('http://localhost:8080/student/add',{
                    method:"POST",
                    headers: { 'Content-Type':'application/json',},
                    body:JSON.stringify( student),
                })
                if(res.ok){
                    alert(name +" added successfully..");
                    console.log(res);
                    setName("");
                    setAddress("");
                }
            }
        else
            alert("empty field");
    }


  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
      className='formContainer'
      onSubmit={addStudent}
    >
      <h2>Add student</h2>
      <TextField id="outlined-basic1" label="Name" variant="outlined" value={name} onChange={ev =>setName(ev.target.value)} />
      {name}
      <TextField id="outlined-basic2" label="Address" variant="outlined" value={address} onChange={event=>setAddress(event.target.value)}/>
      {address}
      <Button variant="contained" onClick={addStudent}>Add Student</Button>
    </Box>
  );
}
