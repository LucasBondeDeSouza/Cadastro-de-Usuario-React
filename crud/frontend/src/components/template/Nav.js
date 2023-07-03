import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

// Esse código renderiza uma área de menu de navegação lateral com dois links.
// Cada link representa uma rota diferente em um aplicativo React com roteamento.
// Os links são estilizados com classes CSS definidas no arquivo 'Nav.css'
// e são exportados como um componente React para serem usados em outros lugares do aplicativo.
export default props =>
    <aside className="menu-area">
        <nav className='menu'>
            <Link to='/'>
                <i className='fa fa-home'></i> Início
            </Link>
            <Link to='/users'>
                <i className='fa fa-users'></i> Usuários
            </Link>
        </nav>
    </aside>