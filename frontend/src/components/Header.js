import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
  return (
   
    <header className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Full-Stack App
        </Link>
        
      
        <Link className="nav-link" to="/addstudent" >
          Add Student
        </Link>
      
      </div>
    </header>
   
  );
};

export default Header;