import './Logo.css'
import logo from '../../assets/images/logo.png'
import React from 'react'
import { Link } from 'react-router-dom'

// esse código renderiza um logo como um elemento de imagem dentro de um link 
// para a página inicial. O logo é exibido como uma imagem com o caminho da imagem 
// sendo definido pela importação de uma imagem específica. 
// O logo é estilizado com classes CSS definidas no arquivo 'Logo.css'
// e é exportado como um componente React para ser usado em outros lugares do aplicativo.
export default props => 
    <aside className='logo'>
        <Link to='/' className='logo'>
            <img src={logo} alt="logo" />
        </Link>
    </aside>