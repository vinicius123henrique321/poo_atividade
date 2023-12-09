import { BelongsTo, Column, DataType, Table, Model, ForeignKey } from "sequelize-typescript";
import Cliente from "./Cliente";

@Table({ tableName: "CPF", timestamps: false })
export default class CPF extends Model {
    @Column({ type: DataType.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true })
    id!: number;
    
    @Column({ type: DataType.STRING(50), allowNull: false })
    valor!: string;

    @Column({ type: DataType.DATE, allowNull: false })
    dataEmissao!: Date;

    @ForeignKey(() => Cliente)
    @Column({ type: DataType.INTEGER, allowNull: false })
    clienteId!: number;

    @BelongsTo(() => Cliente, {constraints: false, onDelete: 'cascade'})
    cliente!: Cliente;
}