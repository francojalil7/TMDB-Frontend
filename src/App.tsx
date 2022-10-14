import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer"
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" >
        </Route>
      </Routes>
      <h1>CONTENIDO</h1>
      <Footer/>
    </>
  );
}

export default App;
