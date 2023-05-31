import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css-images/css/cadastro.css";
import "./css-images/css/styleHome.css";
import "./css-images/css/login.css"
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Home from "./pages/home";
import Dash  from  './components/bar_chart.jsx'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />  
        <Route path="/cadastro" element={<Cadastro />} /> 
        <Route path="/home" element={<Home />} /> 
        <Route path="/" element={<Home />} />
        <Route path="/dash" element={<Dash />}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
