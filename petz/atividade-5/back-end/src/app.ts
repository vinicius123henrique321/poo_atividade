import express from "express";
import cors from "cors";
import { json, urlencoded } from "body-parser";
import connetion from "./db/dbconfig";
import ClienteRouter from "./routes/ClienteRoutes";
import EmpresaRouter from "./routes/EmpresaRoutes";
import ServicoRouter from "./routes/ServicoRoutes";
import ProdutoRouter from "./routes/ProdutoRoutes";
import PetRouter from "./routes/PetRoutes";
import UtilRoutes from "./routes/UtilRoutes";

export const app = express();

app.use(cors({
    origin: '*'
}));

app.use(json());

app.use(urlencoded({
    extended: true
}));

app.use('/', UtilRoutes);
app.use('/cliente', ClienteRouter);
app.use('/empresa', EmpresaRouter);
app.use('/servico', ServicoRouter);
app.use('/produto', ProdutoRouter);
app.use('/pet', PetRouter);

console.log("Estabilizando conexão com banco de dados...")
connetion.sync({ force: true }).then(() => {
    console.log("Conectado com o banco de dados.");
}).catch((error) => {
    console.log("[ ERROR ]: ", error);
});