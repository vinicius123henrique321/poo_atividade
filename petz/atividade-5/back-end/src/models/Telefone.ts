import { Model, Table, Column, DataType, HasMany, ForeignKey, HasOne, BelongsTo } from "sequelize-typescript";
import Cliente from "./Cliente";

@Table({ tableName: "Telefone", timestamps: false })
export default class Telefone extends Model {
    @Column({ type: DataType.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true })
    id!: number;

    @Column({ type: DataType.INTEGER, allowNull: false })
    ddd!: number;

    @Column({ type: DataType.INTEGER, allowNull: false })
    numero!: number;

    @ForeignKey(() => Cliente)
    @Column({ type: DataType.INTEGER, allowNull: false })
    clienteId!: number;

    @BelongsTo(() => Cliente, {constraints: false, onDelete: 'cascade'})
    cliente!: Cliente;
}