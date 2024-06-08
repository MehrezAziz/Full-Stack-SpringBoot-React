import {Outlet} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";

export default function Layout(){

    
    return (
        <>
        <Header/>
        <main>      
            <Outlet/>
        </main>
        <Footer/>
        </>
    );
}