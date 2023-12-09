import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cliente from "../models/Cliente";
import THttpResponse from "../types/THttpResponse";
import { FaTrash } from "react-icons/fa";
import swal from "sweetalert";

const InfoCliente: React.FC = () => {
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


    const { id } = useParams();

    useEffect(() => {
        getInfo();
    }, []);

    function excluir(id: number) {
        const pet = info.pet.find(x => x.id === id);

        if (pet !== undefined) {
            fetch("http://localhost:8080/pet/delete", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: id })
            });

            let index = info.pet.indexOf(pet);
            info.pet.splice(index, 1);
            setInfo({ ...info, pet: [ ...info.pet ] });
        }
    }

    async function getInfo() {
        const httpResponse: THttpResponse<Cliente> = await fetch(`http://localhost:8080/cliente/view`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        })
        .then((response) => response.json());

        setInfo(httpResponse.Data as Cliente);
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
        const isNotUndefined = (cliente.telefone.find(x => x.id === +id) !== undefined) || (button !== undefined)

        if (isNotUndefined) {
            cliente.telefone.find(x => x.id === +id)!.numero = +novoNumero
            setInfo(cliente);
            button!.textContent = novoNumero;
            input.value = "";
        }
    }

    async function submitForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const httpResponse: THttpResponse<any> = await fetch("http://localhost:8080/cliente/alterar", {
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
                            onChange={ (e) => setInfo({ ...info, nome: e.target.value }) }
                            value={ info.nome }
                            id="nome"
                            aria-describedby="nomeHelp"
                        />
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
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nomeSocial" className="form-label">CPF</label>
                        <input
                            type="text"
                            className="form-control"
                            value={ info.cpf.valor }
                            id="nomeSocial"
                            aria-describedby="nomeSocialHelp"
                            disabled
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nomeSocial" className="form-label">RG</label>
                        <ul className="list-group">
                            {info.rg.map((rg, key) => (
                                <li className="list-group-item disabled" key={ key }>{ rg.valor }</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telefones" className="form-label">Telefones</label>
                        <div className="input-group">
                            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Selecionar...</button>
                            <ul className="dropdown-menu">
                                {info.telefone.map((i, k) => (
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
                <div className="row justify-content-end">
                    <button type="submit" className="col-md-3 btn btn-success">Salvar alterações</button>
                </div>
            </form>
            <div className="container">
                <h2>Pets</h2>
                <table className="table table-hover">
                    <thead>
                        <tr className="table-dark">
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Raça</th>
                            <th scope="col">Gênero</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        { Array.isArray(info.pet) && info.pet.map((i, k) => {
                            return (
                                <tr key={ k }>
                                    <td>{ i.id }</td>
                                    <td>{ i.nome }</td>
                                    <td>{ i.tipo }</td>
                                    <td>{ i.raca }</td>
                                    <td>{ i.genero }</td>
                                    <td style={{ display: "flex", justifyContent: "space-around" }}>
                                        <button onClick={ () => excluir(i.id as number) } style={{ background: "none", border: "none" }}><FaTrash /></button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                <h2>Produtos Consumidos</h2>
                <table className="table table-hover">
                    <thead>
                        <tr className="table-dark">
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        { Array.isArray(info.produtosConsumidos) && info.produtosConsumidos.map((i, k) => {
                            return (
                                <tr key={ k }>
                                    <td>{ i.id }</td>
                                    <td>{ i.nome }</td>
                                    <td>{ i.valor }</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                <h2>Serviços Consumidos</h2>
                <table className="table table-hover">
                    <thead>
                        <tr className="table-dark">
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        { Array.isArray(info.servicosConsumidos) && info.servicosConsumidos.map((i, k) => {
                            return (
                                <tr key={ k }>
                                    <td>{ i.id }</td>
                                    <td>{ i.nome }</td>
                                    <td>{ i.valor }</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default InfoCliente;