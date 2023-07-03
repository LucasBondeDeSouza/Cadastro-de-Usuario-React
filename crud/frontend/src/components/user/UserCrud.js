import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'

// Esse código cria um objeto chamado headerProps que contém informações sobre um cabeçalho. 
// As propriedades do objeto incluem o ícone a ser exibido, 
// o título do cabeçalho e uma descrição do propósito do cabeçalho. 
// Esse objeto pode ser usado posteriormente para passar essas informações como propriedades para componentes que exibem o cabeçalho.
const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
}

// esse código define a URL base para uma API de usuários na constante baseUrl 
// e o estado inicial de um componente na constante initialState. 
// A propriedade user no estado inicial representa os campos de nome e email de um usuário, 
// inicializados como vazios. A propriedade list no estado inicial representa uma lista vazia de usuários. 
// Essas constantes podem ser usadas posteriormente para fazer solicitações à API ou para inicializar o estado de um componente.
const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: ''},
    list: []
}

export default class UserCrud extends Component {

    // Esse código inicializa o objeto state com os mesmos valores das
    // propriedades presentes no objeto initialState. 
    // Isso é comum em componentes React para definir o estado inicial do 
    // componente com base em um valor predefinido, como no caso do objeto initialState.
    // A partir desse ponto, o objeto state pode ser modificado e atualizado durante a execução do componente.
    state = { ...initialState }

    // Esse código realiza uma solicitação HTTP GET para a URL 
    // especificada em baseUrl antes de o componente ser desmontado. 
    // Assim que a resposta é recebida, os dados são armazenados 
    // na propriedade list do estado do componente usando setState(). 
    // Geralmente, esse tipo de lógica é usado para realizar tarefas de limpeza ou
    // cancelar solicitações pendentes antes de o componente ser desmontado.
    componentWillUnmount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    // Esse código define um método que é usado para limpar ou redefinir 
    // a propriedade user do estado do componente para o seu valor inicial. 
    // O valor inicial é obtido a partir do objeto initialState. 
    // Geralmente, esse tipo de lógica é usado para redefinir os campos de entrada ou 
    // reverter as alterações feitas pelo usuário.
    clear() {
        this.setState({ user: initialState.user })
    }

    // esse código faz uma solicitação HTTP para criar ou atualizar um usuário na API.
    // A solicitação é feita com base no estado atual do componente, 
    // onde as informações do usuário estão armazenadas na propriedade user. 
    // Dependendo se o usuário já possui um id ou não, o método HTTP e a URL são determinados.
    // Após receber a resposta da solicitação, o estado do componente é atualizado, 
    // redefinindo o usuário para o seu estado inicial e atualizando a lista de usuários com base na resposta.
    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }

    // Esse código define um método que recebe um usuário como parâmetro e retorna 
    // uma lista atualizada de usuários. O usuário passado como parâmetro é removido 
    // da lista existente (caso exista) com base no seu id. Se o parâmetro add for true, 
    // o usuário também é adicionado no início da lista. Essa função é útil para atualizar 
    // a lista de usuários após a criação, atualização ou exclusão de um usuário, 
    // mantendo a consistência e a ordem dos usuários na lista.
    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id)
        if (add) list.unshift(user)
        return list 
    }

    // esse código é usado para atualizar um campo específico do estado do componente 
    // com base em um evento de mudança. Ele cria uma cópia do objeto user do estado, 
    // atualiza o campo correspondente com o novo valor do evento e, em seguida, 
    // atualiza o estado do componente com o objeto user modificado. 
    // Esse método é frequentemente usado em elementos de formulário controlados para 
    // atualizar dinamicamente o estado do componente à medida que o usuário interage com os campos do formulário.
    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    // Esse código renderiza um formulário com dois campos: "Nome" e "E-mail".
    // Cada campo é representado por uma coluna e contém um rótulo e um campo de entrada de texto.
    // O formulário também possui botões "Salvar" e "Cancelar" alinhados à direita.
    // Quando os botões são clicados, os métodos save() e clear() são chamados para realizar ações específicas.
    renderForm() {
        return (
            <div className='form'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <div className='form-group'>
                            <label>Nome</label>
                            <input type='text' className='form-control' 
                            name='name' value={this.state.user.name}
                            onChange={e => this.updateField(e)}
                            placeholder='Digite o Nome...' />
                        </div>
                    </div>

                    <div className='col-12 col-md-6'>
                        <div className='form-group'>
                            <label>E-mail</label>
                            <input type='text' className='form-control'
                            name='email' value={this.state.user.email}
                            onChange={e => this.updateField(e)}
                            placeholder='Digite o E-mail...' />
                        </div>
                    </div>
                </div>

                <hr />
                <div className='row'>
                    <div className='col-12 d-flex justify-content-end'>
                        <button className='btn btn-primary'
                        onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className='btn btn-secondary ml-2'
                        onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    // Esse código é usado para carregar os dados de um usuário no estado do componente. 
    // Ele atualiza a propriedade user do estado com o objeto user passado como parâmetro,
    // substituindo qualquer objeto user existente. 
    // Esse método é útil quando se deseja carregar os dados de um usuário específico 
    // para edição ou visualização no componente.
    load(user) {
        this.setState({ user })
    }

    // Esse código é usado para remover um usuário da lista de usuários. 
    // Ele faz uma requisição DELETE para a API utilizando o ID do usuário, 
    // remove o usuário da lista atualizada de usuários e atualiza o estado do componente 
    // com a lista atualizada. Esse método é frequentemente usado quando há a necessidade de 
    // excluir um usuário do sistema.
    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false)
            this.setState({ list })
        })
    }

    // Esse código renderiza uma tabela com quatro colunas: "ID", "Nome", "E-mail" e "Ações". 
    // Através do método renderRows(), são renderizadas as linhas da tabela que contêm os dados dos usuários. 
    // Essa tabela é frequentemente usada para exibir uma lista de usuários com suas informações e opções de ação.
    renderTable() {
        return (
            <table className='table mt-4'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    // Esse código renderiza as linhas da tabela com os dados dos usuários. 
    // Para cada usuário na lista de usuários armazenada no estado do componente, 
    // uma linha da tabela é criada com as células de dados contendo o ID, nome, e-mail e 
    // botões de ação (editar e excluir). 
    // Quando os botões são clicados, os métodos load() e remove() são chamados, 
    // respectivamente, para executar as ações correspondentes. 
    // Esse método é usado para renderizar dinamicamente as linhas da tabela com os dados dos usuários.
    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className='btn btn-warning'
                        onClick={() => this.load(user)}>
                            <i className='fa fa-pencil'></i>
                        </button>

                        <button className='btn btn-danger ml-2'
                        onClick={() => this.remove(user)}>
                            <i className='fa fa-trash'></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    // O método render() renderiza o componente Main com as props headerProps e,
    // dentro do componente Main, renderiza o conteúdo retornado pelos métodos renderForm() 
    // e renderTable(). Esses métodos são responsáveis por renderizar o formulário e a 
    // tabela no componente principal. O conteúdo renderizado é retornado como parte da estrutura JSX 
    // retornada pelo método render().
    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}