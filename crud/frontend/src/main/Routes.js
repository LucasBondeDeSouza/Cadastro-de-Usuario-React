import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

// Esse código configura as rotas do aplicativo usando o React Router.
// Ele define três rotas: uma rota para a página inicial ('/') que renderiza o componente Home, 
// uma rota para a funcionalidade de usuários ('/users') que renderiza o componente UserCrud,
// e uma rota curinga ('*') que também renderiza o componente Home. 
// Quando o aplicativo é acessado em um determinado caminho, o componente correspondente à rota é renderizado.
export default props =>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/users' element={<UserCrud />} />
        <Route path='*' element={<Home />} />
    </Routes>