import { Component } from "react";
import Cliente from "../models/Cliente";
import { FaPen, FaTrash } from "react-icons/fa";
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
        const clientes: Cliente[] = await fetch("http://localhost:32831/cliente/clientes")
        .then((response) => response.json())

        this.setState({ clientes: clientes });
    }

    editar(id: number) {
        window.location.href = `/cliente/${ id }`;
    }

    excluir(id: number) {
        let { clientes } = this.state;
        const cliente = clientes.find(x => x.id === id);

        if (cliente !== undefined) {
            fetch("http://localhost:32831/cliente/excluir", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(cliente)
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
                        <tr className="table-dark">
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Nome Social</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map((i, k) => {
                            return (
                                <tr key={ k }>
                                    <td>{ i.id }</td>
                                    <td>{ i.nome }</td>
                                    <td>{ i.nomeSocial }</td>
                                    <td>{ i.email }</td>
                                    <td style={{ display: "flex", justifyContent: "space-around" }}>
                                        <button onClick={ () => this.editar(i.id) } style={{ background: "none", border: "none" }}><FaPen /></button>
                                        <button onClick={ () => this.excluir(i.id) } style={{ background: "none", border: "none" }}><FaTrash /></button>
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