import { useState } from "react";
import Cliente from "../models/Cliente";
import "../style/detail.css"

const CadastroClientes: React.FC = () => {
    const initialState: Cliente = {
        id: 0,
        nome: "",
        nomeSocial: "",
        email: undefined,
        endereco: {
            id: 0,
            estado: "",
            cidade: "",
            bairro: "",
            rua: "",
            numero: "",
            codigoPostal: "",
            informacoesAdicionais: "",
            links: []
        },
        telefones: [],
        links: []
    };

    const resetForm = () => {
        console.log("resetando form")
        setIdObj({ id: 1 });
        setInfo(initialState);
        console.log("apos reset:", info, "idObjs:", idObj)
    };

    const [info, setInfo] = useState<Cliente>(initialState);
    let [idObj, setIdObj] = useState<{ id: number }>({ id: 1 });

    function saveTelefone() {
        const regex = /[-() ]/g;
        let input: HTMLInputElement = document.querySelector("#telefones")!;
        let novoNumero: string = input.value.replaceAll(regex, "");
        let ddd: string = novoNumero.substring(0, 2);
        let numero: string = novoNumero.substring(2);
        setInfo({ ...info, telefones: [ ...info.telefones, { ddd: ddd, numero: numero, links: []  } ] });
        setIdObj({ id: ++idObj.id });
    }

    function submitForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        fetch("http://localhost:32831/cliente/cadastrar", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(info)
        }).then(() => {
            console.log("Cadastrado com sucesso");
            resetForm();
        })
        .catch(error => {
            console.error("Erro ao cadastrar:", error);
        });
    }

    return (
        <form className="container mb-5" onSubmit={ (e) => submitForm(e) }>
            <fieldset>
            <h1 className="pb-4">
                    <div className="rectangle"></div>
                    Cadastrar novo cliente
                </h1>   
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={ (e) => setInfo({ ...info, nome: e.target.value }) }
                        id="nome"
                        aria-describedby="nomeHelp"
                    />
                    <div id="nomeHelp" className="form-text">Insira seu nome completo.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="nomeSocial" className="form-label">Nome Social</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={ (e) => setInfo({ ...info, nomeSocial: e.target.value }) }
                        id="nomeSocial"
                        aria-describedby="nomeSocialHelp"
                    />
                    <div id="nomeSocialHelp" className="form-text">Insira seu nome social.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input
                        type="email"
                        className="form-control"
                        onChange={ (e) => setInfo({ ...info, email: e.target.value }) }
                        id="email"
                        aria-describedby="emailHelp"
                        />
                    <div id="emailHelp" className="form-text">Insira seu e-mail de endereço. Ex: loremipsum@email.com</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="telefones" className="form-label">Telefones</label>
                    <div className="input-group">
                        <input type="text" className="form-control" id="telefones" />
                        <button className="btn btn-outline-success" type="button" onClick={ () => saveTelefone() }>Salvar</button>
                    </div>
                    {info.telefones.map((telefone, key) => (
                        <p key={ key }>{ `(${ telefone.ddd }) ${ telefone.numero }` }</p>
                    ))}
                </div>
            </fieldset>
            <fieldset>
                <legend className="mb-3 mt-4">Endereço</legend>
                <div className="row">
                    <div className="col-md-3 mb-3">
                        <label htmlFor="cep" className="form-label">CEP</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={ (e) => setInfo({ ...info, endereco: { ...info.endereco, codigoPostal: e.target.value } }) }
                            id="cep"
                            aria-describedby="cepHelp"
                        />
                        <div id="cepHelp" className="form-text">Ex: 12345-678</div>
                    </div>
                    <div className="col-md-5 mb-3">
                        <label htmlFor="cidade" className="form-label">Cidade</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={ (e) => setInfo({ ...info, endereco: { ...info.endereco, cidade: e.target.value } }) }
                            id="cidade"
                            aria-describedby="cidadeHelp"
                        />
                        <div id="cidadeHelp" className="form-text">O nome da sua cidade.</div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="bairro" className="form-label">Bairro</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={ (e) => setInfo({ ...info, endereco: { ...info.endereco, bairro: e.target.value } }) }
                            id="bairro"
                            aria-describedby="bairroHelp"
                        />
                        <div id="bairroHelp" className="form-text">O nome do seu bairro.</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 mb-3">
                        <label htmlFor="rua" className="form-label">Rua</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            onChange={ (e) => setInfo({ ...info, endereco: { ...info.endereco, rua: e.target.value } }) }
                            id="rua" 
                            aria-describedby="ruaHelp" 
                        />
                    </div>
                    <div className="col-md-5 mb-3">
                        <label htmlFor="rua" className="form-label">Estado</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            onChange={ (e) => setInfo({ ...info, endereco: { ...info.endereco, estado: e.target.value } }) }
                            id="rua" 
                            aria-describedby="ruaHelp" 
                        />
                    </div>
                    <div className="col-md-2 mb-3">
                        <label htmlFor="numero" className="form-label">Número</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            onChange={ (e) => setInfo({ ...info, endereco: { ...info.endereco, numero: e.target.value } }) }
                            id="numero" 
                            aria-describedby="numeroHelp" 
                        />
                    </div>
                    <div className="col-md-12 mb-3">
                        <label htmlFor="informacoes" className="form-label">Informações Adicionais</label>
                     <input 
                            type="text"
                            className="form-control"
                            onChange={ (e) => setInfo({ ...info, endereco: { ...info.endereco, informacoesAdicionais: e.target.value } }) } 
                            id="informacoes" 
                            aria-describedby="informacoesHelp" 
                        />
                    </div>
                </div>
            </fieldset>
            <div className="row justify-content-end">
                <button type="submit" className="col-md-3 btn btn-success custom-btn"  style={{ backgroundColor: "#4D7A8C", color: "#fff", width:"160px" }}> Salvar alterações</button>
            </div>
        </form>
    )
}

export default CadastroClientes;