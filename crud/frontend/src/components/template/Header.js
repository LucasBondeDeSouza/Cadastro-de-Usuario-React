import './Header.css'
import React from 'react'

// esse código renderiza um cabeçalho com um título, um ícone e um subtítulo.
// O cabeçalho possui estilos personalizados definidos no arquivo 'Header.css' e é
// exportado como um componente React para ser usado em outros lugares do aplicativo. 
// Os valores do ícone, título e subtítulo são passados como propriedades (props) para o componente.
export default props =>
    <header className="header d-none d-sm-flex flex-column">
        <h1 className='mt-3'>
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </h1>
        <p className='lead text-muted'>{props.subtitle}</p>
    </header>