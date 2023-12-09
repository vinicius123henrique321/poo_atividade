import { Request, Response, Router } from "express";
import Cliente from "../models/Cliente";
import CPF from "../models/CPF";
import RG from "../models/RG";
import Telefone from "../models/Telefone";
import Pet from "../models/Pet";
import Empresa from "../models/Empresa";
import Produto from "../models/Produto";
import Servico from "../models/Servico";

const router = Router();

router.get('/all', async (req: Request, res: Response) => {
    const clientes = await Cliente.findAll({ include: [ CPF, RG, Telefone, Pet, Produto, Servico, Empresa ] });

    return res.status(200).json({
        Ok: true,
        Data: clientes
    });
});

router.post('/view', async (req: Request, res: Response) => {
    const { id } = req.body;

    const clientes = await Cliente.findOne({ where: { id: id }, include: [ CPF, RG, Telefone, Pet, Produto, Servico, Empresa ] });

    return res.status(200).json({
        Ok: true,
        Data: clientes
    });
});

router.post('/new', async (req: Request, res: Response) => {
    const cliente = await Cliente.create({ ...req.body }, { include: [ CPF, RG, Telefone, Pet, Produto, Servico ] });

    return res.status(200).json({
        Ok: true,
        Data: cliente
    });
});

router.put('/alterar', async (req: Request, res: Response) => {
    const { id } = req.body;

    const cliente = await Cliente.update({ ...req.body }, { where: { id: id } });

    return res.status(200).json({
        Ok: true,
        Data: cliente
    });
});

router.delete('/delete', async (req: Request, res: Response) => {
    const { id } = req.body;

    await Cliente.destroy({ where: { id: id } });

    return res.status(200).json({
        Ok: true
    });
});

export default router;