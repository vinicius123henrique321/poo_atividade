import { Component } from "react";
import "../styles/detail.css"

export default class ListaProdutos extends Component{
    render() {
        return (
            <div className="container">
                <h1 className="pb-4">
                    <div className="rectangle"></div>
                    Produtos e Serviços
                </h1>   
                <table className="table table-hover">
                    <thead>
                        <tr style={{ backgroundColor: '#4D7A8C', color: "white" }}>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2</td>
                            <td>Ração de gatos</td>
                            <td>Produto</td>
                            <td>R$ 45,00</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Banho</td>
                            <td>Serviço</td>
                            <td>R$ 30,00</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Consulta veterinária</td>
                            <td>Serviço</td>
                            <td>R$ 80,00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}