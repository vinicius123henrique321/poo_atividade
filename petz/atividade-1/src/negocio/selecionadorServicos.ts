import Servico from "../modelo/servico";

export default class SelecionadorServicos {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        this.servicos = servicos
    }
    
    public selecionar(nomeServico: string) {
        let servicoAlvo = new Servico(nomeServico, 0, '')
        this.servicos.forEach(servico => {
            if (nomeServico === servico.nome) {
                servicoAlvo = servico
            }
        })
        return servicoAlvo
    }
}