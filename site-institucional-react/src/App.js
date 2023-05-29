import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css-images/css/cadastro.css";
import "./css-images/css/styleHome.css";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Home from "./pages/home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />  
        <Route path="/cadastro" element={<Cadastro />} /> 
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
