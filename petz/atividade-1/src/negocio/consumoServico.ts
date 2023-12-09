import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Servico from "../modelo/servico";

export default class ConsumoServico {
    private entrada: Entrada
    constructor() {
        this.entrada = new Entrada()
    }
    public cadastrarConsumoServico(cliente: Cliente, servico: Servico): void {
        console.log(`\nInício do cadastro de consumo de servico`);
        cliente.setServicosConsumidos = servico
        console.log(`\nCadastro concluído :)\n`);
    }
}
