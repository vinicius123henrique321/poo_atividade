import { Component } from "react";
import "../styles/detail.css"

export default class ListaPets extends Component{
    render() {
        return (
            <div className="container">
                <h1 className="pb-4">
                    <div className="rectangle"></div>
                    Cadastro de Pets
                </h1>   
                <table className="table table-hover">
                    <thead>
                        <tr style={{ backgroundColor: '#4D7A8C', color: "white" }}>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Raça</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Gênero</th>
                            <th scope="col">Dono</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Jorge Henrique</td>
                            <td>Yorkshire</td>
                            <td>Cachorro</td>
                            <td>Macho</td>
                            <td>O Alves</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Ollie</td>
                            <td>Bulldog</td>
                            <td>Cachorro</td>
                            <td>Fêmea</td>
                            <td>Rammon Dino</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Flocky</td>
                            <td>Laranja</td>
                            <td>Gato</td>
                            <td>Macho</td>
                            <td>Gustavo Bateman</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}