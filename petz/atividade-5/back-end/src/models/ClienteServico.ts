import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import Cliente from "./Cliente";
import Servico from "./Servico";

@Table({ tableName: "ClienteServico", timestamps: false })
export default class ClienteServico extends Model {
    @Column({ type: DataType.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true })
    id!: number;

    @ForeignKey(() => Cliente)
    @Column({ type: DataType.INTEGER, allowNull: false })
    clienteId!: number;

    @ForeignKey(() => Servico)
    @Column({ type: DataType.INTEGER, allowNull: false })
    servicoId!: number;
}