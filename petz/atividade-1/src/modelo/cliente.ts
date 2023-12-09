import CPF from "./cpf"
import Pet from "./pet"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    private pets: Array<Pet>

    constructor(nome: string, nomeSocial: string, cpf: CPF, pets: Array<Pet>, telefones: Array<Telefone>, dataCadastro: Date, rgs: Array<RG>) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = rgs
        this.dataCadastro = new Date()
        this.telefones = telefones
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.pets = pets
    }
    
    public get getCpf(): CPF {
        return this.cpf
    }

    public set setCPF (cpf : CPF) {
        this.cpf = cpf
    }

    public get getRgs(): Array<RG> {
        return this.rgs
    }

    public set setRgs(rg : RG) {
        this.rgs.push(rg)
    }

    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    

    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }

    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }

    public set setProdutosConsumidos(produto: Produto){
        this.produtosConsumidos.push(produto)
    }

    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }

    public set setServicosConsumidos(servico: Servico){
        this.servicosConsumidos.push(servico)
    }
    
    public get getPets(): Array<Pet>{
        return this.pets
    }
}