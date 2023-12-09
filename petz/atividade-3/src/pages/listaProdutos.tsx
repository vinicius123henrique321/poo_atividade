import React, { Component } from "react";
import FormularioCadastroProduto from "./CadastroProduto"; 
import "../style/detail.css"

interface Produto {
  id: number;
  nome: string;
  tipo: string;
  preco: string;
}

interface ListaProdutosState {
  produtos: Produto[];
}

export default class ListaProdutos extends Component<any, ListaProdutosState> {
  constructor(props: any) {
    super(props);
    this.state = {
      produtos: [],
    };
  }

  adicionarProduto = (novoProduto: Produto) => {
    this.setState((prevState) => ({
      produtos: [...prevState.produtos, novoProduto],
    }));
  };

  render() {
    const { produtos } = this.state;

    return (
      <div className="container">
        <FormularioCadastroProduto onSubmit={this.adicionarProduto} />
        <h1 className="pb-4">
                    <div className="rectangle"></div>
                    lista de produtos
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
            {produtos.map((produto) => (
              <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.tipo}</td>
                <td>{produto.preco}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
