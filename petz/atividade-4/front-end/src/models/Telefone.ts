import Link from "./Link";

export default interface Telefone {
    id?: number;
    numero: string;
    ddd: string;
    links: Link[];
}