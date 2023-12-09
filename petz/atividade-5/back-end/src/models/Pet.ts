import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import Cliente from "./Cliente";

@Table({ tableName: "Pet", timestamps: false })
export default class Pet extends Model {
    @Column({ type: DataType.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true })
    id!: number;

    @Column({ type: DataType.STRING(50), allowNull: false })
    nome!: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    tipo!: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    raca!: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    genero!: string;

    @ForeignKey(() => Cliente)
    @Column({ type: DataType.INTEGER, allowNull: false })
    clienteId!: number;

    @BelongsTo(() => Cliente, {constraints: false, onDelete: 'cascade'})
    cliente!: Cliente;
}