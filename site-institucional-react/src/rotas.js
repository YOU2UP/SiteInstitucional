import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Home from "./pages/home";
import Dash  from  './components/dashs/bar_chart.jsx'
import Dash2 from './pages/perfil.jsx'
import Home_logado from './pages/home_logado'
import Avaliacao from './pages/avaliacao'
import Agenda from './pages/agenda_treinos'
import Configuracao from './pages/config.jsx'
import Perfil_match from './pages/perfil_match'
import Chat from './chat/pages/Chat'


function Rotas() {
  return (
    <BrowserRouter>
  <Routes>
        <Route path="/login" element={<Login />} />  
        <Route path="/cadastro" element={<Cadastro />} /> 
        <Route path="/home" element={<Home />} /> 
        <Route path="/" element={<Home />} />
        <Route path="/dash" element={<Dash />}/>
        <Route path="/perfil" element={<Dash2 />}/>
        <Route path="/avaliacao" element={<Avaliacao/>}/>
        <Route path="/pagina_inicial" element={<Home_logado/>}/>
        <Route path="/agenda" element={<Agenda/>}/>
        <Route path='/configuracao' element={<Configuracao/>}/>
        <Route path='/perfil_match/:id' element={<Perfil_match/>}/>
        <Route path='/chat' element={<Chat/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default Rotas; 