import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import CPF from "../modelo/cpf"
import Cadastro from "./cadastro"
import Pet from "../modelo/pet"
import Telefone from "../modelo/telefone"
import RG from "../modelo/rg"

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)


        const verificadorCPF =  (cpf: string) =>{
            const clienteEncontrado = this.clientes.find((cliente) => cliente.getCpf.getValor === cpf)
            return clienteEncontrado === undefined
        }

        let cadastrarCPF = true
        let cpf = new CPF("", new Date)
        while (cadastrarCPF){
            let valor = this.entrada.receberTexto(`Informe o número do cpf: `);
            let valorVerificado = ""
            let dataEmissao = new Date
            if (validadorCPF(valor) && verificadorCPF(valor)){
                valorVerificado = valor
                let data = this.entrada.receberTexto(`Informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
                let partesData = data.split('/')
                let ano = new Number(partesData[2].valueOf()).valueOf()
                let mes = new Number(partesData[1].valueOf()).valueOf() - 1
                let dia = new Number(partesData[0].valueOf()).valueOf() 
                dataEmissao = new Date(ano, mes, dia)
                cadastrarCPF = false
            }else{
                console.log("CPF inválido! \n")
            }
            cpf = new CPF(valorVerificado, dataEmissao);
        }

        
        let telefones: Telefone[] = [];
        let cadastrarTelefones : string|boolean = true;
        while (cadastrarTelefones) {
            let valorTelefone = this.entrada.receberTexto(`Informe o número do telefone no padrão (00) 00000-0000: `)
            let dddETelefone = valorTelefone.split(' ')

            telefones.push(new Telefone(dddETelefone[0], dddETelefone[1]))

            cadastrarTelefones = this.entrada.receberTexto(`Cadastrar um novo telefone? (S/N) `)
            if (cadastrarTelefones === "S" || cadastrarTelefones === "s") {
                cadastrarTelefones = true
            } else if (cadastrarTelefones === "N" || cadastrarTelefones === "n") {
                cadastrarTelefones = false
            } else{
                console.log("Opção inválida!")
                cadastrarTelefones = this.entrada.receberTexto(`Cadastrar um novo telefone? (S/N) `)
            }
        }

        let rgs: RG[] = [];
        let cadastrarRG : string | boolean = true;
        while(cadastrarRG) {
            let valorRG = this.entrada.receberTexto(`Informe o número do RG: `)
            let dataRG = this.entrada.receberTexto(`Informe a data de emissão do RG, no padrão dd/mm/yyyy: `)
            let partesDataRG = dataRG.split('/')
            let anoRG = new Number(partesDataRG[2].valueOf()).valueOf()
            let mesRG = new Number(partesDataRG[1].valueOf()).valueOf() - 1
            let diaRG = new Number(partesDataRG[0].valueOf()).valueOf()
            let dataEmissaoRG = new Date(anoRG, mesRG, diaRG)

            rgs.push(new RG(valorRG, dataEmissaoRG))

            cadastrarRG = this.entrada.receberTexto(`Deseja cadastrar um novo RG? (S/N) `)
            if (cadastrarRG === "S" || cadastrarRG === "s") {
                cadastrarRG = true
            } else if (cadastrarRG === "N" || cadastrarRG === "n") {
                cadastrarRG = false
            } else{
                console.log("Opção inválida!")
                cadastrarRG = this.entrada.receberTexto(`Deseja cadastrar um novo RG? (S/N) `)
            }
        }


        let pets: Pet[] = []
        let inputPet: string | boolean = true;
        while(inputPet) {
            
            let nomePet = this.entrada.receberTexto(`Informe o nome do pet: `);
            let tipoPet = this.entrada.receberTexto(`Informe o tipo do pet: `);
            let generoPet = this.entrada.receberTexto(`Informe o gênero do pet (M/F): `);
            let racaPet = this.entrada.receberTexto(`Informe a raça do pet: `);

            pets.push(new Pet(nomePet, tipoPet, generoPet, racaPet));

            inputPet = this.entrada.receberTexto(`Cadastrar outro pet? (S/N)`);
            if (inputPet === "S" || inputPet === "s") {
                inputPet = true
            } else if (inputPet === "N" || inputPet === "n") {
                inputPet = false
            } else {
                console.log(`Opção inválida`)
                inputPet = this.entrada.receberTexto(`Cadastrar outro pet? (S/N)`)
            }
        }

        let dataCadastro = new Date();

        let cliente = new Cliente(nome, nomeSocial, cpf, pets, telefones, dataCadastro, rgs);

        this.clientes.push(cliente)

        console.log(`\nCadastro concluído :)\n`);



        function validadorCPF(cpf: string) {
            if (typeof cpf !== "string") return false
            cpf = cpf.replace(/[\s.-]*/igm, '')
            if (
                !cpf ||
                cpf.length != 11 ||
                cpf == "00000000000" ||
                cpf == "11111111111" ||
                cpf == "22222222222" ||
                cpf == "33333333333" ||
                cpf == "44444444444" ||
                cpf == "55555555555" ||
                cpf == "66666666666" ||
                cpf == "77777777777" ||
                cpf == "88888888888" ||
                cpf == "99999999999" 
            ) {
                return false
            }
            var soma = 0
            var resto
            for (var i = 1; i <= 9; i++) 
                soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
            resto = (soma * 10) % 11
            if ((resto == 10) || (resto == 11))  resto = 0
            if (resto != parseInt(cpf.substring(9, 10)) ) return false
            soma = 0
            for (var i = 1; i <= 10; i++) 
                soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
            resto = (soma * 10) % 11
            if ((resto == 10) || (resto == 11))  resto = 0
            if (resto != parseInt(cpf.substring(10, 11) ) ) return false
            return true
        }
    }

}