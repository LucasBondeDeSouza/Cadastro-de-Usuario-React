import './Main.css'
import React from 'react'
import Header from './Header'

// Esse código renderiza a seção principal da página. 
// Ele inclui um cabeçalho renderizado pelo componente Header, um elemento <main>
// que contém o conteúdo principal da página e uma área de conteúdo 
// onde o conteúdo filho do componente Main será renderizado.
// O componente Main é estilizado com classes CSS definidas no arquivo 'Main.css'
// e é exportado como um componente React para ser usado em outros lugares do aplicativo.
export default props =>
    <React.Fragment>
        <Header {...props} />
        <main className="content container-fluid">
            <div className='p-3 mt-3'>
                {props.children}
            </div>
        </main>
    </React.Fragment>