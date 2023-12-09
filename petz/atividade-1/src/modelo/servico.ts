export default class Servico {
    public nome!: string
    public valor!: number
    public tipo!: string

    constructor(nome: string, valor: number, tipo: string){
        this.nome = nome
        this.valor = valor
        this.tipo = tipo
    }
}