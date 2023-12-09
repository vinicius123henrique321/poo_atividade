import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";

export default class Selecionador {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
    }
    
    public selecionar(numeroCpf: string) {
        let cpf = new CPF('', new Date())
        let clienteAlvo = new Cliente('', '', cpf, [], [], new Date(), [])
        this.clientes.forEach(cliente => {
            if (numeroCpf === cliente.getCpf.getValor) {
                clienteAlvo = cliente
            }
        })
        return clienteAlvo
    }
}