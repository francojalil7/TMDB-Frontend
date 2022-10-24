import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer"
import Login from "./views/login/Login"
import Register from "./views/register/Register"


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
