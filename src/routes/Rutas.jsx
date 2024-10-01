import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "../screens/Home";
import Inicio from "../screens/Inicio";

const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
