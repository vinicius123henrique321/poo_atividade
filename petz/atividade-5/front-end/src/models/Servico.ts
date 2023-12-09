import Empresa from "./Empresa";
import Cliente from "./Cliente";

export default interface Servico  {
    id?: number;
    nome: string;
    valor: number;
    clientes: Cliente[];
    empresaId?: number;
    empresa?: Empresa;
}