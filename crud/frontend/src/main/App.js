import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'

// Esse código configura a estrutura básica do aplicativo React. 
// Ele importa arquivos CSS do Bootstrap e do Font Awesome para estilizar o aplicativo. 
// Em seguida, ele importa os componentes Logo, Nav, Routes e Footer de seus respectivos arquivos.
// Em seguida, o componente App é exportado como padrão e envolve todo o conteúdo com o roteador BrowserRouter. 
// Dentro do App, são renderizados o logo, a área de menu de navegação, o conteúdo das rotas e o rodapé.
export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>