import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cliente from "../models/Cliente";
import "../style/detail.css"

const InfoCliente: React.FC = () => {
    const [info, setInfo] = useState<Cliente>({
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
    });
    const [formReset, setFormReset] = useState<boolean>(false);
    const { id } = useParams();

    useEffect(() => {
        getInfo()
    }, [formReset]);

    async function getInfo() {
        const url = `http://localhost:32831/cliente/${ id }`;
        
        const clientes: Cliente = await fetch(url)
            .then((response) => response.json());
        setInfo(clientes);
    }

    function getTelefone(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        const input: HTMLInputElement = document.querySelector("#telefones")!;
        const selected: HTMLLIElement = event.target as HTMLLIElement;
        input.value = selected.innerText;
        input.dataset.id = selected.dataset.key;
    }

    function saveTelefone(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        let input: HTMLInputElement = document.querySelector("#telefones")!;
        let cliente: Cliente = info;
        const novoNumero: string = input.value;
        const id: string | undefined = input.dataset.id;

        if (id === "" || id === undefined) return;

        let button = document.querySelector(`[data-key="${id}"]`)
        const isNotUndefined = (cliente.telefones.find(x => x.id === +id) !== undefined) || (button !== undefined)

        if (isNotUndefined) {
            cliente.telefones.find(x => x.id === +id)!.numero = novoNumero
            setInfo(cliente);
            button!.textContent = novoNumero;
            input.value = "";
        }
    }

    function submitForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        fetch("http://localhost:32831/cliente/atualizar", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(info)
        });

        setFormReset((prevReset) => !prevReset);
    }

    return (
        <form className="container mb-5" onSubmit={ (e) => submitForm(e) }>
            <fieldset>
            <h1 className="pb-4">
                    <div className="rectangle"></div>
                    Informações do cliente
                </h1>   
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={ (e) => setInfo({ ...info, nome: e.target.value }) }
                        value={ info.nome }
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
                        value={ info.nomeSocial }
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
                        value={ info.email }
                        id="email"
                        aria-describedby="emailHelp"
                        />
                    <div id="emailHelp" className="form-text">Insira seu e-mail de endereço. Ex: loremipsum@email.com</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="telefones" className="form-label">Telefones</label>
                    <div className="input-group">
                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Selecionar...</button>
                        <ul className="dropdown-menu">
                            {info.telefones.map((i, k) => (
                                <li key={ k }>
                                    <button className="dropdown-item" data-key={ i.id } onClick={ (e) => getTelefone(e) }>{ `(${ i.ddd }) ${ i.numero }` }</button>
                                </li>
                            ))}
                        </ul>
                        <input type="text" className="form-control" id="telefones" data-id="" />
                        <button className="btn btn-outline-success" type="button" onClick={ (e) => saveTelefone(e) }>Salvar</button>
                    </div>
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
                            value={ info.endereco.codigoPostal }
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
                            value={ info.endereco.cidade }
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
                            value={ info.endereco.bairro }
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
                            value={ info.endereco.rua } 
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
                            value={ info.endereco.estado } 
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
                            value={ info.endereco.numero }
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
                            value={ info.endereco.informacoesAdicionais }
                            id="informacoes" 
                            aria-describedby="informacoesHelp" 
                        />
                    </div>
                </div>
            </fieldset>
            <div className="row justify-content-end">
                <button type="submit" className="col-md-3 btn btn-success" style={{ backgroundColor: "#4D7A8C", color: "#fff", width:"160px" }}>Salvar alterações</button>
            </div>
        </form>
    )
}

export default InfoCliente;