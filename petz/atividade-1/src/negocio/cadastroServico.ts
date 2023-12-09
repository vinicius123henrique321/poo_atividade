import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Cadastro from "./cadastro";

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do Serviço`);
        let nomeServico = this.entrada.receberTexto('Por favor, informe o nome do serviço: ')
        let valorServico = this.entrada.receberNumero('Por favor, informe o valor do serviço: ')
        let tipoServico = this.entrada.receberTexto(`Por favor, informe para qual tipo de animal o serviço é destinado: `)
        let servico = new Servico(nomeServico, valorServico, tipoServico)
        servico.nome = nomeServico
        servico.valor = valorServico
        tipoServico = tipoServico

        this.servicos.push(servico)
        console.log(`\nCadastro concluído :)\n`);
    }
}