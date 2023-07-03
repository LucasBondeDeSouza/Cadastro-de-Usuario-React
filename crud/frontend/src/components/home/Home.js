import React from 'react'
import Main from '../template/Main'

// Esse código renderiza uma página inicial de um sistema de cadastro
// usando o React. A página possui um cabeçalho com o ícone "home" e o título 
// "Início", seguido por um texto de boas-vindas e uma descrição do sistema.
// O componente Main é provavelmente responsável por estruturar o layout da página.
export default props =>
    <Main icon="home" title="Início"
        subtitle="Segundo Projeto do Capítulo de React." >
        <div className='display-4'>Bem Vindo!</div>
        <hr />
        <p className='mb-0'>Sistema para exemplificar a
            construção de um cadastro desenvolvido em React!</p>
    </Main>