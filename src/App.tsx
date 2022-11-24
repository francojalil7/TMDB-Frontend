import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import useCheckUser from "./hooks/useCheckUser";
import Series from "./components/series/Series";
import Home from "./pages/Home";
import Movies from "./components/Movies";
import Result from "./components/Result";
import { Box } from "@chakra-ui/react";

function App() {
  const { checkUser } = useCheckUser();

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <>
      <Box maxWidth={"1200px"} m="0 auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/series" element={<Series />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/result/:search" element={<Result />}></Route>
        </Routes>
      </Box>
      <Footer />
    </>
  );
}

export default App;