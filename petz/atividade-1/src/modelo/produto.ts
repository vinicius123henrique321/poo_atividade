export default class Produto {
    public nome!: string
    public valor!: number
    public tipo!: string
    public raca!: string

    constructor(nome: string, valor: number, tipo: string, raca: string) {
        this.nome = nome
        this.valor = valor
        this.tipo = tipo
        this.raca = raca
    }
}