import Cliente from "./Cliente";
import Produto from "./Produto";
import Servico from "./Servico";

export default interface Empresa {
    id: number;
    nome: string;
    clientes: Cliente[];
    produtos: Produto[];
    servicos: Servico[];
}