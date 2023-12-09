import { useState, useEffect } from "react";
import Empresa from "../models/Empresa";
import THttpResponse from "../types/THttpResponse";
import Produto from "../models/Produto";
import swal from "sweetalert";
import "../style/detail.css"


const CadastroProdutos: React.FC = () => {
    const [info, setInfo] = useState<Produto>({
        nome: "",
        valor: 0,
        clientes: [],
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

    async function submitForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const httpResponse: THttpResponse<any> = await fetch("http://localhost:8080/produto/new", {
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
                text: 'Produto cadastrado com sucesso!',
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
                    Informações do produto
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
                    <div id="nomeHelp" className="form-text">Insira o nome do produto.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="valor" className="form-label">Valor</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={ (e) => setInfo({ ...info, valor: +e.target.value }) }
                        id="valor"
                        aria-describedby="valorHelp"
                    />
                    <div id="valorHelp" className="form-text">Insira o valor do produto</div>
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

export default CadastroProdutos;