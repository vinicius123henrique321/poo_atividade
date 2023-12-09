import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import Cliente from "./Cliente";
import Produto from "./Produto";
import Servico from "./Servico";

@Table({ tableName: "Empresa", timestamps: false })
export default class Empresa extends Model {
    @Column({ type: DataType.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true })
    id!: number;

    @Column({ type: DataType.STRING, allowNull: false })
    nome!: string;

    @HasMany(() => Cliente)
    clientes!: Cliente[];

    @HasMany(() => Produto)
    produtos!: Produto[]

    @HasMany(() => Servico)
    servicos!: Servico[]
}