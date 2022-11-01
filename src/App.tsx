import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import useCheckUser from "./hooks/useCheckUser";
import Series from "./components/series/Series";

function App() {
  const { checkUser } = useCheckUser();

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/series" element={<Series />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
