import { Component } from "react";
import Produto from "../models/Produto";
import { FaPen, FaTrash } from "react-icons/fa";
import THttpResponse from "../types/THttpResponse";
import "../style/detail.css"

interface State {
    produtos: Produto[];
}

export default class ListaProdutos extends Component<{}, State>{
    constructor(props: {}) {
        super(props);
        this.state = { produtos: [] }
    }

    async listarProdutos() {
        const httpResponse: THttpResponse<Produto> = await fetch("http://localhost:8080/produto/all", {
            method: 'GET'
        })
        .then((response) => response.json())

        this.setState({ produtos: httpResponse.Data as Array<Produto> });
    }

    editar(id: number) {
        window.location.href = `alterar/produto/${ id }`;
    }

    excluir(id: number) {
        let { produtos } = this.state;
        const produto = produtos.find(x => x.id === id);

        if (produto !== undefined) {
            fetch("http://localhost:8080/produto/delete", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: id })
            });

            let index = produtos.indexOf(produto);
            produtos.splice(index, 1);
            this.setState({ produtos: produtos });
        }
    }

    componentDidMount() {
        this.listarProdutos();
    }

    render() {
        const { produtos } = this.state;

        return (
            <div className="container">
                <h1 className="pb-4">
                    <div className="rectangle"></div>
                    Lista de Produtos
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
                        { Array.isArray(produtos) && produtos.map((i, k) => {
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