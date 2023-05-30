import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css-images/css/cadastro.css";
import "./css-images/css/styleHome.css";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Home from "./pages/home";
import Dash  from  './components/dashs/bar_chart.jsx'
import Dash2 from './components/dashs/ranking.jsx'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />  
        <Route path="/cadastro" element={<Cadastro />} /> 
        <Route path="/home" element={<Home />} /> 
        <Route path="/" element={<Home />} />
        <Route path="/dash" element={<Dash />}/>
        <Route path="/ranking" element={<Dash2 />}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
