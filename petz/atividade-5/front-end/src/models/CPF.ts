import Cliente from "./Cliente";

export default interface CPF {
    id?: number;
    valor: string;
    dataEmissao: Date;
    clienteId?: number;
    cliente?: Cliente;
}