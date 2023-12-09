import { useState, useEffect } from "react";
import Cliente from "../models/Cliente";
import Empresa from "../models/Empresa";
import THttpResponse from "../types/THttpResponse";
import Pet from "../models/Pet";
import swal from "sweetalert";
import "../style/detail.css"

const CadastroPets: React.FC = () => {
    const [info, setInfo] = useState<Pet>({
        nome: "",
        tipo: "",
        raca: "",
        genero: "",
        clienteId: 0,
        cliente: {
            nome: "",
            nomeSocial: "",
            cpf: {
                valor: "",
                dataEmissao: new Date(),
                clienteId: 0,
            },
            rg: [],
            telefone: [],
            pet: [],
            produtosConsumidos: [],
            servicosConsumidos: [],
            empresaId: 0,
            empresa: {
                id: 0,
                nome: "",
                clientes: [],
                produtos: [],
                servicos: []
            }
        }
    });

    const [clientes, setCliente] = useState<Cliente[]>([]);

    async function getClientes() {
        const empresas: THttpResponse<Cliente> = await fetch("http://localhost:8080/cliente/all", {
            method: 'GET'
        }).then((response) => response.json());

        setCliente(empresas.Data as Array<Cliente>);
    }

    useEffect(() => {
        getClientes();
    }, []);

    async function submitForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const httpResponse: THttpResponse<any> = await fetch("http://localhost:8080/pet/new", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(info)
        }).then((response) => {
            return response.json();
        }).catch(() => {
            return {
                Ok: false,
                Data: []
            } as THttpResponse<any>;
        });

        if(httpResponse.Ok) {
            swal({
                title: 'Sucesso',
                text: 'Pet cadastrado com sucesso!',
                icon: 'success',
                closeOnClickOutside: true
            });
        } else {
            swal({
                title: 'Falha',
                text: 'Houve uma falha ao realizar o cadastro :(',
                icon: 'error',
                closeOnClickOutside: true
            });
        }
    }

    return (
        <form className="container mb-5" onSubmit={ (e) => submitForm(e) }>
            <fieldset>
            <h1 className="pb-4">
                    <div className="rectangle"></div>
                    Informações do pet
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
                    <div id="nomeHelp" className="form-text">Insira o nome do Pet.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="tipo" className="form-label">Tipo</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={ (e) => setInfo({ ...info, tipo: e.target.value }) }
                        id="tipo"
                        aria-describedby="tipoHelp"
                    />
                    <div id="tipoHelp" className="form-text">Insira o tipo do Pet.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="raca" className="form-label">Raça</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={ (e) => setInfo({ ...info, raca: e.target.value }) }
                        id="raca"
                        aria-describedby="racaHelp"
                    />
                    <div id="racaHelp" className="form-text">Insira a raça do Pet.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="raca" className="form-label">Gênero</label>
                    <select onChange={ (e) => setInfo({ ...info, genero: e.currentTarget.value }) } className="form-select">
                        <option selected>Selecione um gênero</option>
                        <option value="Muié">Fêmea</option>
                        <option value="Homi">Macho</option>
                    </select>
                    <div id="generoHelp" className="form-text">Selecione o gênero do Pet.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="empresa" className="form-label">Cliente</label>
                    <select onChange={ (e) => setInfo({ ...info, clienteId: +e.currentTarget.value, cliente: clientes.find(x => x.id === +e.currentTarget.value)! }) } className="form-select">
                        <option selected>Selecione um cliente</option>
                        {clientes.map((cliente, key) => (
                            <option key={ key } value={ cliente.id } >{ cliente.nome + ' | ' + cliente.cpf.valor }</option>
                        ))}
                    </select>
                    <div id="empresaHelp" className="form-text">Selecione uma cliente.</div>
                </div>
            </fieldset>
            <div className="row justify-content-end">
                <button type="submit" className="col-md-3 btn btn-success custom-btn" style={{ backgroundColor: "#4D7A8C", color: "#fff", width:"160px" }}> Salvar alterações</button>
            </div>
        </form>
    )
}

export default CadastroPets;