import Empresa from "./Empresa";
import Cliente from "./Cliente";

export default interface Produto {
    id?: number;
    nome: string;
    valor: number;
    clientes: Cliente[];
    empresaId?: number;
    empresa?: Empresa;
}