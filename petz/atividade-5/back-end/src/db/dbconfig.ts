import { Sequelize } from "sequelize-typescript";
import Cliente from "../models/Cliente";
import CPF from "../models/CPF";
import Empresa from "../models/Empresa";
import Produto from "../models/Produto";
import RG from "../models/RG";
import Servico from "../models/Servico";
import Telefone from "../models/Telefone";

import * as dotenv from "dotenv";
import Pet from "../models/Pet";
import ClienteProduto from "../models/ClienteProduto";
import ClienteServico from "../models/ClienteServico";

dotenv.config();

const connetion = new Sequelize(
    `${process.env.PG_DATABASE}`,
    `${process.env.PG_USER}`,
    `${process.env.PG_PWD}`,
    {
        dialect: "postgres",
        host: `${process.env.PG_HOST}`,
        port: 5432,
        models: [ Cliente, CPF, Empresa, Produto, RG, Servico, Telefone, Pet, ClienteProduto, ClienteServico ]    
    }
)

export default connetion;