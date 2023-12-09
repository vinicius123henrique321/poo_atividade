import { Model, Table, Column, DataType, HasMany, HasOne, BelongsTo, ForeignKey, BelongsToMany } from "sequelize-typescript";
import CPF from "./CPF";
import RG from "./RG";
import Telefone from "./Telefone";
import Pet from "./Pet";
import Empresa from "./Empresa";
import Produto from "./Produto";
import Servico from "./Servico";
import ClienteProduto from "./ClienteProduto";
import ClienteServico from "./ClienteServico";

@Table({ tableName: "Cliente", timestamps: true })
export default class Cliente extends Model {
    @Column({ type: DataType.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true })
    id!: number;

    @Column({ type: DataType.STRING(50), allowNull: false })
    nome!: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    nomeSocial!: string;

    @HasOne(() => CPF)
    cpf!: CPF;

    @HasMany(() => RG)
    rg?: RG[];

    @HasMany(() => Telefone)
    telefone?: Telefone[];

    @HasMany(() => Pet)
    pet?: Pet[];

    @BelongsToMany(() => Produto, () => ClienteProduto)
    produtosConsumidos?: Produto[]

    @BelongsToMany(() => Servico, () => ClienteServico)
    servicosConsumidos?: Servico[]

    @ForeignKey(() => Empresa)
    @Column({ type: DataType.INTEGER, allowNull: false })
    empresaId!: number;

    @BelongsTo(() => Empresa, {constraints: false, onDelete: 'cascade'})
    empresa!: Empresa;
}