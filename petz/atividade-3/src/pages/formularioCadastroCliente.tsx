import React, { useState } from "react";


export default function FormularioCadastroCliente({ onSubmit }: any) {
  const [idCounter, setIdCounter] = useState(1);
  const [nome, setNome] = useState("");
  const [nomeSocial, setNomeSocial] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleNomeChange = (e: any) => {
    setNome(e.target.value);
  };

  const handleNomeSocialChange = (e: any) => {
    setNomeSocial(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleCpfChange = (e: any) => {
    setCpf(e.target.value);
  };

  const handleRgChange = (e: any) => {
    setRg(e.target.value);
  };

  const handleTelefoneChange = (e: any) => {
    setTelefone(e.target.value);
  };

  const handleSubmit = () => {
    const novoCliente = {
      id: idCounter,
      nome,
      nomeSocial,
      email,
      cpf,
      rg,
      telefone,
    };

    setNome("");
    setNomeSocial("");
    setEmail("");
    setCpf("");
    setRg("");
    setTelefone("");

    setIdCounter(idCounter + 1);
    onSubmit(novoCliente);
  };

  return (
    <div className="container">
      <h1 className="pb-4">
                    <div className="rectangle"></div>
                    Cadastro de clientes
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
            placeholder="Nome social"
            aria-label="Nome Social"
            aria-describedby="basic-addon1"
            value={nomeSocial}
            onChange={handleNomeSocialChange}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            @
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="E-mail"
            aria-label="E-mail"
            aria-describedby="basic-addon1"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="CPF"
            aria-label="CPF"
            aria-describedby="basic-addon1"
            value={cpf}
            onChange={handleCpfChange}
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="RG"
            aria-label="RG"
            aria-describedby="basic-addon1"
            value={rg}
            onChange={handleRgChange}
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Telefone"
            aria-label="Telefone"
            aria-describedby="basic-addon1"
            value={telefone}
            onChange={handleTelefoneChange}
          />
        </div>
        <div className="input-group mb-3 d-flex justify-content-end">
          <button
            className="btn btn-outline-secondary "
            style={{ backgroundColor: '#4D7A8C', color: "white" }}
            type="button"
            onClick={handleSubmit}
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}
