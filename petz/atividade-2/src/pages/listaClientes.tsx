import { Component } from "react";
import "../styles/detail.css"

export default class ListaCliente extends Component{
    render() {
        
        return (
            <div className="container">
                <h1 className="pb-4">
                    <div className="rectangle"></div>
                    Cadastro de Clientes
                </h1>   
                <table className="table table-hover">
                    <thead>
                        <tr style={{ backgroundColor: '#4D7A8C', color: "white" }}>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Nome Social</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">CPF</th>
                            <th scope="col">RG</th>
                            <th scope="col">Telefone</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>viniii</td>
                            <td>vinoso</td>
                            <td>abvluboke@gmail.com</td>
                            <td>11111111111</td>
                            <td>2222222222</td>
                            <td>12 997854981</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}