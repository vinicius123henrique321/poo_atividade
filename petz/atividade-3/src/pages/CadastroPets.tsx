import React, { useState } from "react";
import "../style/detail.css"

export default function CadastroPet({ onSubmit }: any) {
  const [idCounter, setIdCounter] = useState(1);
  const [nome, setNome] = useState("");
  const [raca, setRaca] = useState("");
  const [tipo, setTipo] = useState("");
  const [genero, setGenero] = useState("");
  const [dono, setDono] = useState("");

  const handleNomeChange = (e: any) => {
    setNome(e.target.value);
  };

  const handleRacaChange = (e: any) => {
    setRaca(e.target.value);
  };

  const handleTipoChange = (e: any) => {
    setTipo(e.target.value);
  };

  const handleGeneroChange = (e: any) => {
    setGenero(e.target.value);
  };

  const handleDonoChange = (e: any) => {
    setDono(e.target.value);
  };

  const handleSubmit = () => {
    const novoPet = {
      id: idCounter,
      nome,
      raca,
      tipo,
      genero,
      dono,
    };

    setNome("");
    setRaca("");
    setTipo("");
    setGenero("");
    setDono("");

    setIdCounter(idCounter + 1);
    onSubmit(novoPet);
  };

  return (
    <div className="container">
      <h1 className="pb-4">
                    <div className="rectangle"></div>
                    Cadastro de pets
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
            placeholder="Raça"
            aria-label="Raça"
            aria-describedby="basic-addon1"
            value={raca}
            onChange={handleRacaChange}
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
            placeholder="Gênero"
            aria-label="Gênero"
            aria-describedby="basic-addon1"
            value={genero}
            onChange={handleGeneroChange}
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Dono"
            aria-label="Dono"
            aria-describedby="basic-addon1"
            value={dono}
            onChange={handleDonoChange}
          />
        </div>
        <div className="input-group mb-3 d-flex justify-content-end">
          <button
            className="btn btn-outline-secondary "
            style={{ backgroundColor: "#4D7A8C", color: "#fff" }}
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
