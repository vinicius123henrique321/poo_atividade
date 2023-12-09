import React, { Component } from "react";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import "../style/detail.css"

interface Cliente {
  id: number;
  nome: string;
  nomeSocial: string;
  email: string;
  cpf: string;
  rg: string;
  telefone: string;
}

interface ListaClienteState {
  clientes: Cliente[];
}

export default class ListaCliente extends Component<any, ListaClienteState> {
  constructor(props: any) {
    super(props);
    this.state = {
      clientes: [],
    };
  }

  adicionarCliente = (novoCliente: Cliente) => {
    this.setState((prevState) => ({
      clientes: [...prevState.clientes, novoCliente],
    }));
  };

  render() {
    const { clientes } = this.state;

    return (
      <div className="container">
        <FormularioCadastroCliente
          onSubmit={this.adicionarCliente}
          style={{ marginBottom: "3rem" }}
        />
        <h1 className="pb-4">
                    <div className="rectangle"></div>
                    Lista de clientes
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
            {clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nome}</td>
                <td>{cliente.nomeSocial}</td>
                <td>{cliente.email}</td>
                <td>{cliente.cpf}</td>
                <td>{cliente.rg}</td>
                <td>{cliente.telefone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
