import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./html/css/reset.css";
import "./html/css/style.css";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />  
        <Route path="/cadastro" element={<Cadastro />} /> 
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
