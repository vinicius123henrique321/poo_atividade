import Endereco from "./Endereco";
import Link from "./Link";
import Telefone from "./Telefone";

export default interface Cliente {
    id: number;
    nome: string;
    nomeSocial: string;
    email?: string;
    endereco: Endereco;
    telefones: Telefone[];
    links: Link[];
}