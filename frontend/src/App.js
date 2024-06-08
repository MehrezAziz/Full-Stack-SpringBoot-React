//import logo from './logo.svg';

import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer";
import InputStudent from "./components/InputStudent";
import ListStudents from "./components/ListStudents";
import Layout from "./Layout"
import './App.css'
import { Route,Routes } from "react-router-dom";
import { UserContextProvider } from './UserContext';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<ListStudents/>} />
            <Route path="/addstudent" element={<InputStudent/>}></Route>
            <Route path="/affstudents" element={<ListStudents/>}></Route>
        </Route>
      </Routes>
    </UserContextProvider>
  )
};

export default App;
