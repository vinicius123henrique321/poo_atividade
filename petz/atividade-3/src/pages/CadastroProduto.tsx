import React, { useState } from "react";

export default function CadastroProduto({ onSubmit }: any) {
  const [idCounter, setIdCounter] = useState(1);
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [preco, setPreco] = useState("");

  const handleNomeChange = (e:any) => {
    setNome(e.target.value);
  };

  const handleTipoChange = (e:any) => {
    setTipo(e.target.value);
  };

  const handlePrecoChange = (e:any) => {
    setPreco(e.target.value);
  };

  const handleSubmit = () => {
    const novoProduto = {
      id: idCounter,
      nome,
      tipo,
      preco,
    };

    setNome("");
    setTipo("");
    setPreco("");

    setIdCounter(idCounter + 1);
    onSubmit(novoProduto);
  };

  return (
    <div className="container">
      <h1 className="pb-4">
                    <div className="rectangle"></div>
                    Cadastro de produtos
                </h1>   
      <form>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nome"
            aria-label="Nome"
            aria-describedby="basic-addon1"
            value={nome}
            onChange={handleNomeChange}
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Tipo"
            aria-label="Tipo"
            aria-describedby="basic-addon1"
            value={tipo}
            onChange={handleTipoChange}
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Preço"
            aria-label="Preço"
            aria-describedby="basic-addon1"
            value={preco}
            onChange={handlePrecoChange}
          />
        </div>
        <div className="input-group mb-3 d-flex justify-content-end">
          <button
            className="btn btn-outline-secondary "
            style={{ backgroundColor: '#4D7A8C', color: "white" }}
            type="button"
            onClick={handleSubmit}
          >
            Cadastrar Produto
          </button>
        </div>
      </form>
    </div>
  );
}
