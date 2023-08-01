import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Breadcrumbs, BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Home from "./pages/home";
import Dash  from  './components/dashs/bar_chart.jsx'
import Dash2 from './pages/perfil.jsx'
import Home_logado from './pages/home_logado'

function Rotas() {
  return (
    <BrowserRouter>
    {/* <Breadcrumbs>
        <BreadcrumbsItem to="/login">Login</BreadcrumbsItem>
        <BreadcrumbsItem to="/cadastro">Cadastro</BreadcrumbsItem>
        <BreadcrumbsItem to="/home">Home</BreadcrumbsItem>
        <BreadcrumbsItem to="/dash">Dash</BreadcrumbsItem>
        <BreadcrumbsItem to="/perfil">Perfil</BreadcrumbsItem>
      </Breadcrumbs> */}
  <Routes>
        <Route path="/login" element={<Login />} />  
        <Route path="/cadastro" element={<Cadastro />} /> 
        <Route path="/home" element={<Home />} /> 
        <Route path="/" element={<Home />} />
        <Route path="/dash" element={<Dash />}/>
        <Route path="/perfil" element={<Dash2 />}/>
        <Route path="/pagina_inicial" element={<Home_logado/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default Rotas;