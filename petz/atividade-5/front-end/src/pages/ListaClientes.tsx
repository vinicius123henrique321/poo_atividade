import { Component } from "react";
import Cliente from "../models/Cliente";
import { FaPen, FaTrash } from "react-icons/fa";
import THttpResponse from "../types/THttpResponse";
import "../style/detail.css"

interface State {
    clientes: Cliente[];
}

export default class ListaClientes extends Component<{}, State>{
    constructor(props: {}) {
        super(props);
        this.state = { clientes: [] }
    }

    async listarClientes() {
        const httpResponse: THttpResponse<Cliente> = await fetch("http://localhost:8080/cliente/all", {
            method: 'GET'
        })
        .then((response) => response.json())

        this.setState({ clientes: httpResponse.Data as Array<Cliente> });
    }

    editar(id: number) {
        window.location.href = `alterar/cliente/${ id }`;
    }

    excluir(id: number) {
        let { clientes } = this.state;
        const cliente = clientes.find(x => x.id === id);

        if (cliente !== undefined) {
            fetch("http://localhost:8080/cliente/delete", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: id })
            });

            let index = clientes.indexOf(cliente);
            clientes.splice(index, 1);
            this.setState({ clientes: clientes });
        }
    }

    componentDidMount() {
        this.listarClientes();
    }

    render() {
        const { clientes } = this.state;

        return (
            <div className="container">
                <h1 className="pb-4">
                    <div className="rectangle"></div>
                    Lista de clientes
                </h1>   
                <table className="table table-hover">
                    <thead>
                        <tr  style={{ backgroundColor: '#4D7A8C', color: "white" }} >
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Nome Social</th>
                            <th scope="col">CPF</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        { Array.isArray(clientes) && clientes.map((i, k) => {
                            return (
                                <tr key={ k }>
                                    <td>{ i.id }</td>
                                    <td>{ i.nome }</td>
                                    <td>{ i.nomeSocial }</td>
                                    <td>{ i.cpf.valor }</td>
                                    <td style={{ display: "flex", justifyContent: "space-around" }}>
                                        <button onClick={ () => this.editar(i.id as number) } style={{ background: "none", border: "none" }}><FaPen /></button>
                                        <button onClick={ () => this.excluir(i.id as number) } style={{ background: "none", border: "none" }}><FaTrash /></button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}