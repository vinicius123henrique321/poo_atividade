import Entrada from "../io/entrada";
import Produto from "../modelo/produto";


export default class EditorProduto {
    private entrada: Entrada
    constructor() {
        this.entrada = new Entrada()
    }
    public editar(produto: Produto): void {
        console.log(`\nInício da edição do Produto`);
        let editarProduto : string|boolean = true
        while (editarProduto) {
            console.log(`Opções de edição:`);
            console.log(`1 - Editar nome do produto`);
            console.log(`2 - Editar o valor do produto`);
            console.log(`0 - Retornar ao menu principal`)

            let opcao = this.entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                    let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `)
                    produto.nome = nome
                    editarProduto = this.entrada.receberTexto("Deseja alterar mais alguma informação do produto (S/N) ?")
                    if (editarProduto === "S" || editarProduto === "s") {
                        editarProduto = true
                    } else if (editarProduto === "N" || editarProduto === "n") {
                        editarProduto = false
                    } else{
                        console.log("Opção inválida!")
                        editarProduto = this.entrada.receberTexto(`Deseja alterar mais alguma informação do produto (S/N) ?`)
                    }
                    break;
                case 2:
                    let valor = this.entrada.receberNumero(`Por favor informe o valor do produto: `)
                    produto.valor = valor
                    editarProduto = this.entrada.receberTexto("Deseja alterar mais alguma informação do produto (S/N) ?")
                    if (editarProduto === "S" || editarProduto === "s") {
                        editarProduto = true
                    } else if (editarProduto === "N" || editarProduto === "n") {
                        editarProduto = false
                    } else{
                        console.log("Opção inválida!")
                        editarProduto = this.entrada.receberTexto(`Deseja alterar mais alguma informação do produto (S/N) ?`)
                    }
                    break;
                case 0:
                    editarProduto = false
                    break

            }
        }    
        console.log(`\nEdição de produto concluída :)\n`);
    }    
}