import CPF from "./CPF";
import Empresa from "./Empresa";
import Pet from "./Pet";
import Produto from "./Produto";
import RG from "./RG";
import Servico from "./Servico";
import Telefone from "./Telefone";

export default interface Cliente {
    id?: number;
    nome: string;
    nomeSocial: string;
    cpf: CPF;
    rg: RG[];
    telefone: Telefone[];
    pet: Pet[];
    produtosConsumidos: Produto[]
    servicosConsumidos: Servico[]
    empresaId: number;
    empresa: Empresa;
}