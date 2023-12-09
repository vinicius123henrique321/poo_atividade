import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";

export default class EditorCliente {
    private entrada: Entrada
    constructor() {
        this.entrada = new Entrada()
    }
    public editar(cliente: Cliente): void {
        console.log(`\nInício da edição do cliente\n`);

        
        let editarCliente : string|boolean = true
        while (editarCliente) {
            console.log(`Opções de edição:`);
            console.log(`1 - Editar nome do cliente`);
            console.log(`2 - Editar nome social do cliente`);
            console.log(`3 - Editar o cpf do cliente`);
            console.log(`0 - Retornar ao menu princial`)

            let opcao = this.entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                    let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
                    cliente.nome = nome
                    editarCliente = this.entrada.receberTexto("Deseja alterar mais alguma informação do cliente (S/N) ?")
                    if (editarCliente === "S" || editarCliente === "s") {
                        editarCliente = true
                    } else if (editarCliente === "N" || editarCliente === "n") {
                        editarCliente = false
                    } else{
                        console.log("Opção inválida!")
                        editarCliente = this.entrada.receberTexto(`Deseja alterar mais alguma informação do cliente (S/N) ?`)
                    }
                    break;
                case 2:
                    let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
                    cliente.nomeSocial = nomeSocial
                    editarCliente = this.entrada.receberTexto("Deseja alterar mais alguma informação do cliente (S/N) ?")
                    if (editarCliente === "S" || editarCliente === "s") {
                        editarCliente = true
                    } else if (editarCliente === "N" || editarCliente === "n") {
                        editarCliente = false
                    } else{
                        console.log("Opção inválida!")
                        editarCliente = this.entrada.receberTexto(`Deseja alterar mais alguma informação do cliente (S/N) ?`)
                    }
                    break
                case 3:
                    let valorCPF = this.entrada.receberTexto(`Por favor informe o cpf do cliente: `)
                    let dataEmissaoCPF = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `)
                    let partesDataCPF = dataEmissaoCPF.split('/')
                    let anoCPF = new Number(partesDataCPF[2].valueOf()).valueOf()
                    let mesCPF = new Number(partesDataCPF[1].valueOf()).valueOf() - 1
                    let diaCPF = new Number(partesDataCPF[0].valueOf()).valueOf()
                    let dataCPF = new Date(anoCPF, mesCPF, diaCPF)
                    let cpf = new CPF(valorCPF, dataCPF)
                    cliente.setCPF = cpf
                    editarCliente = this.entrada.receberTexto("Deseja alterar mais alguma informação do cliente (S/N) ?")
                    if (editarCliente === "S" || editarCliente === "s") {
                        editarCliente = true
                    } else if (editarCliente === "N" || editarCliente === "n") {
                        editarCliente = false
                    } else{
                        console.log("Opção inválida!")
                        editarCliente = this.entrada.receberTexto(`Deseja alterar mais alguma informação do cliente (S/N) ?`)
                    }
                    break
                case 0:
                    editarCliente = false
                    break

            }
        }    

        console.log(`\nEdição concluída :)\n`);
    }
}