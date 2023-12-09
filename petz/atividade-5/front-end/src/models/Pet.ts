import Cliente from "./Cliente";

export default interface Pet {
    id?: number;
    nome: string;
    tipo: string;
    raca: string;
    genero: string;
    clienteId?: number;
    cliente?: Cliente;
}