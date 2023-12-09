import { Component } from "react";
import Servico from "../models/Servico";
import { FaPen, FaTrash } from "react-icons/fa";
import THttpResponse from "../types/THttpResponse";
import "../style/detail.css"

interface State {
    servicos: Servico[];
}

export default class ListaServicos extends Component<{}, State>{
    constructor(props: {}) {
        super(props);
        this.state = { servicos: [] }
    }

    async listarServicos() {
        const httpResponse: THttpResponse<Servico> = await fetch("http://localhost:8080/servico/all", {
            method: 'GET'
        })
        .then((response) => response.json())

        this.setState({ servicos: httpResponse.Data as Array<Servico> });
    }

    editar(id: number) {
        window.location.href = `alterar/servico/${ id }`;
    }

    excluir(id: number) {
        let { servicos } = this.state;
        const servico = servicos.find(x => x.id === id);

        if (servico !== undefined) {
            fetch("http://localhost:8080/servico/delete", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: id })
            });

            let index = servicos.indexOf(servico);
            servicos.splice(index, 1);
            this.setState({ servicos: servicos });
        }
    }

    componentDidMount() {
        this.listarServicos();
    }

    render() {
        const { servicos } = this.state;

        return (
            <div className="container">
                <h1 className="pb-4">
                    <div className="rectangle"></div>
                    Lista de Serviços
                </h1>   
                <table className="table table-hover">
                    <thead>
                        <tr style={{ backgroundColor: '#4D7A8C', color: "white" }}>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Valor</th>
                            <th scope="col">Empresa</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        { Array.isArray(servicos) && servicos.map((i, k) => {
                            return (
                                <tr key={ k }>
                                    <td>{ i.id }</td>
                                    <td>{ i.nome }</td>
                                    <td>{ i.valor }</td>
                                    <td>{ i.empresa!.nome }</td>
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