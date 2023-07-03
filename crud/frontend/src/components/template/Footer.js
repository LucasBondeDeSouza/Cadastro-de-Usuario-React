import './Footer.css'
import React from 'react'

// Esse código renderiza um rodapé com a mensagem "Desenvolvido com ❤ por Cod3r".
// O rodapé provavelmente possui estilos personalizados definidos no arquivo 'Footer.css'
// e é exportado como um componente React para ser usado em outros lugares do aplicativo.
export default props =>
    <footer className="footer">
        <span>
            Desenvolvido com <i className='fa fa-heart text-danger'></i> por
            <strong> Cod<span className='text-danger'>3</span>r</strong>
        </span>
    </footer>