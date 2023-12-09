import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";


export default class ConsumoProduto {
    private entrada: Entrada
    constructor() {
        this.entrada = new Entrada()
    }
    public cadastrarConsumoProduto(cliente: Cliente, produto: Produto): void {
        console.log(`\nInício do cadastro de consumo de produto`);
        cliente.setProdutosConsumidos = produto
        console.log(`\nCadastro concluído :)\n`);
    }
}
