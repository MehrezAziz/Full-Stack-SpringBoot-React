import React from "react"

const Footer=
()=> {
    return(
    <footer
        className="bg-dark text-white text-center mt-5 p-5 myFooter" >
        &copy;Mehrez -- Spring boot + React Application -- {new Date().getFullYear()-1}~{new Date().getFullYear()}
    </footer>
    );
};

export  default Footer