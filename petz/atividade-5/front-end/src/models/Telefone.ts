import Cliente from "./Cliente";

export default interface Telefone {
    id?: number;
    numero: number;
    ddd: number;
    clienteId?: number;
    cliente?: Cliente;
}