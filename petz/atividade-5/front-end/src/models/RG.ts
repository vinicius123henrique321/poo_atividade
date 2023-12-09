import Cliente from "./Cliente";

export default interface RG {
    id?: number;
    valor: string;
    dataEmissao: Date;
    clienteId?: number;
    cliente?: Cliente;
}