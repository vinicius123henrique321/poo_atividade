import Entrada from "../io/entrada";
import Servico from "../modelo/servico";

export default class EditorServico {
    private entrada: Entrada
    constructor() {
        this.entrada = new Entrada()
    }
    public editar(servico: Servico): void {
        console.log(`\nInício da edição do Serviço`);
        let editarServico : string|boolean = true
        while (editarServico) {
            console.log(`Opções de edição:`);
            console.log(`1 - Editar nome do servico`);
            console.log(`2 - Editar o valor do servico`);
            console.log(`0 - Retornar ao menu principal`)

            let opcao = this.entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                    let nome = this.entrada.receberTexto(`Por favor informe o nome do servico: `)
                    servico.nome = nome
                    editarServico = this.entrada.receberTexto("Deseja alterar mais alguma informação do servico (S/N) ?")
                    if (editarServico === "S" || editarServico === "s") {
                        editarServico = true
                    } else if (editarServico === "N" || editarServico === "n") {
                        editarServico = false
                    } else{
                        console.log("Opção inválida!")
                        editarServico = this.entrada.receberTexto(`Deseja alterar mais alguma informação do servico (S/N) ?`)
                    }
                    break;
                case 2:
                    let valor = this.entrada.receberNumero(`Por favor informe o valor do servico: `)
                    servico.valor = valor
                    editarServico = this.entrada.receberTexto("Deseja alterar mais alguma informação do servico (S/N) ?")
                    if (editarServico === "S" || editarServico === "s") {
                        editarServico = true
                    } else if (editarServico === "N" || editarServico === "n") {
                        editarServico = false
                    } else{
                        console.log("Opção inválida!")
                        editarServico = this.entrada.receberTexto(`Deseja alterar mais alguma informação do servico (S/N) ?`)
                    }
                    break;
                case 0:
                    editarServico = false
                    break    

            }
        }    
        console.log(`\nEdição concluída :)\n`);
    }
}