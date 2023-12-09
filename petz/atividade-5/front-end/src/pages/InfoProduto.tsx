import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import THttpResponse from "../types/THttpResponse";
import swal from "sweetalert";
import Produto from "../models/Produto";

const InfoProuto: React.FC = () => {
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


    const { id } = useParams();

    useEffect(() => {
        getInfo();
    }, []);

    async function getInfo() {
        const httpResponse: THttpResponse<Produto> = await fetch(`http://localhost:8080/produto/view`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        })
        .then((response) => response.json());

        setInfo(httpResponse.Data as Produto);
    }

    async function submitForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const httpResponse: THttpResponse<any> = await fetch("http://localhost:8080/produto/alterar", {
            method: "PUT",
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
                text: 'Dados salvos com sucesso!',
                icon: 'success',
                closeOnClickOutside: true
            });
        } else {
            swal({
                title: 'Falha',
                text: 'Houve uma falha ao salvar as alterações :(',
                icon: 'error',
                closeOnClickOutside: true
            });
        }
    }

    return (
        <>
            <form className="container mb-5" onSubmit={ (e) => submitForm(e) }>
                <fieldset>
                    <legend className="mb-3">Informações Gerais</legend>
                    <div className="mb-3">
                        <label htmlFor="nome" className="form-label">Nome</label>
                        <input
                            type="text"
                            className="form-control"
                            value={ info.nome }
                            onChange={ (e) => setInfo({ ...info, nome: e.target.value }) }
                            id="nome"
                            aria-describedby="nomeHelp"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="valor" className="form-label">Valor</label>
                        <input
                            type="text"
                            className="form-control"
                            value={ info.valor }
                            onChange={ (e) => setInfo({ ...info, valor: +e.target.value }) }
                            id="valor"
                            aria-describedby="valorHelp"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="valor" className="form-label">Empresa</label>
                        <input
                            type="text"
                            className="form-control"
                            value={ info.empresa!.nome }
                            id="valor"
                            aria-describedby="valorHelp"
                            disabled
                        />
                    </div>
                </fieldset>
                <div className="row justify-content-end">
                    <button type="submit" className="col-md-3 btn btn-success">Salvar alterações</button>
                </div>
            </form>
        </>
    )
}

export default InfoProuto;