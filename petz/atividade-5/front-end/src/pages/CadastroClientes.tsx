import { useState, useEffect } from "react";
import Cliente from "../models/Cliente";
import Empresa from "../models/Empresa";
import THttpResponse from "../types/THttpResponse";
import swal from "sweetalert";
import "../style/detail.css"

const CadastroClientes: React.FC = () => {
    const [info, setInfo] = useState<Cliente>({
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
    });

    const [empresas, setEmpresas] = useState<Empresa[]>([]);

    async function getEmpresas() {
        const empresas: THttpResponse<Empresa> = await fetch("http://localhost:8080/empresa/all", {
            method: 'GET'
        }).then((response) => response.json());

        setEmpresas(empresas.Data as Array<Empresa>);
    }

    useEffect(() => {
        getEmpresas();
    }, []);

    function saveTelefone() {
        const regex = /[-() ]/g;
        let input: HTMLInputElement = document.querySelector("#telefones")!;
        let novoNumero: string = input.value.replaceAll(regex, "");
        let ddd: string = novoNumero.substring(0, 2);
        let numero: string = novoNumero.substring(2);
        setInfo({ ...info, telefone: [ ...info.telefone, { ddd: +ddd, numero: +numero } ] });
    }

    function saveRg() {
        const regex = /[-. ]/g;
        let inputRg: HTMLInputElement = document.querySelector("#rg")!;
        let inputData: HTMLInputElement = document.querySelector("#dataEmissaoRg")!;
        let data = new Date(inputData.value);
        data.setDate(data.getDate() + 1);
        data.setMonth(data.getMonth() + 1);
        let novoRg: string = inputRg.value.replaceAll(regex, "");
        setInfo({ ...info, rg: [ ...info.rg, { valor: novoRg, dataEmissao: data } ] });
    }

    async function submitForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const httpResponse: THttpResponse<any> = await fetch("http://localhost:8080/cliente/new", {
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
                text: 'Cliente cadastrado com sucesso!',
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
                    Informações do cliente
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
                    <div id="nomeSocialHelp" className="form-text">Insira seu nome social..</div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="cpf" className="form-label">CPF</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={ (e) => setInfo({ ...info, cpf: { ...info.cpf, valor: e.target.value } }) }
                            id="cpf"
                            aria-describedby="cpfHelp"
                        />
                        <div id="cpfHelp" className="form-text">Insira CPF</div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="dataEmissaoCPF" className="form-label">Data de Emissão</label>
                        <input
                            type="date"
                            className="form-control"
                            onChange={ (e) => setInfo({ ...info, cpf: { ...info.cpf, dataEmissao: new Date(e.target.value) }  }) }
                            id="dataEmissaoCPF"
                            aria-describedby="dataEmissaoCPFHelp"
                        />
                        <div id="dataEmissaoCPFHelp" className="form-text">Insira data de emissão do CPF</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 mb-3">
                        <label htmlFor="telefones" className="form-label">Telefones</label>
                        <div className="input-group">
                            <input type="text" className="form-control" id="telefones" />
                            <button className="btn btn-outline-success" type="button" onClick={ () => saveTelefone() }>Salvar</button>
                        </div>
                        {info.telefone.map((telefone, key) => (
                            <p key={ key }>{ `(${ telefone.ddd }) ${ telefone.numero }` }</p>
                        ))}
                    </div>
                    <div className="col-md-9 mb-3">
                        <label htmlFor="rg" className="form-label">RG e Data de Emissão</label>
                        <div className="input-group">
                            <input type="text" id="rg" className="form-control" placeholder="__.___.___-_" />
                            <input type="date" id="dataEmissaoRg" className="form-control" placeholder="dd/mm/yyyy" />
                            <button className="btn btn-outline-success" type="button" onClick={ () => saveRg() }>Salvar</button>
                        </div>
                        {info.rg.map((rg, key) => (
                            <p key={ key }>{ `${ rg.valor } - ${ rg.dataEmissao.getDate() + '/' + rg.dataEmissao.getMonth() + '/' + rg.dataEmissao.getFullYear() }` }</p>
                        ))}
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="empresa" className="form-label">Empresa</label>
                    <select onChange={ (e) => setInfo({ ...info, empresaId: +e.currentTarget.value, empresa: empresas.find(x => x.id === +e.currentTarget.value)! }) } className="form-select">
                        <option selected>Selecione uma empresa</option>
                        {empresas.map((empresa, key) => (
                            <option key={ key } value={ empresa.id } >{ empresa.nome }</option>
                        ))}
                    </select>
                    <div id="empresaHelp" className="form-text">Selecione uma empresa.</div>
                </div>
            </fieldset>
            <div className="row justify-content-end">
                <button type="submit" className="col-md-3 btn btn-success custom-btn" style={{ backgroundColor: "#4D7A8C", color: "#fff", width:"160px" }}> Salvar alterações</button>
            </div>
        </form>
    )
}

export default CadastroClientes;