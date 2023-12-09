import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import Produto from "./Produto";
import Cliente from "./Cliente";

@Table({ tableName: "ClienteProduto", timestamps: false })
export default class ClienteProduto extends Model {
    @Column({ type: DataType.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true })
    id!: number;

    @ForeignKey(() => Cliente)
    @Column({ type: DataType.INTEGER, allowNull: false })
    clienteId!: number;

    @ForeignKey(() => Produto)
    @Column({ type: DataType.INTEGER, allowNull: false })
    produtoId!: number;
}