import { Router, Request, Response } from "express";
import Servico from "../models/Servico";
import Cliente from "../models/Cliente";
import Empresa from "../models/Empresa";

const router = Router();

router.get('/all', async (req: Request, res: Response) => {
    const servicos = await Servico.findAll({ include: [ Cliente, Empresa ] })

    return res.status(200).json({
        Ok: true,
        Data: servicos
    });
});

router.post('/view', async (req: Request, res: Response) => {
    const { id } = req.body;

    const servico = await Servico.findOne({ where: { id: id }, include: [ Cliente, Empresa ] });

    return res.status(200).json({
        Ok: true,
        Data: servico
    });
});

router.post('/new', async (req: Request, res: Response) => {
    const servico = await Servico.create({ ...req.body })

    return res.status(200).json({
        Ok: true,
        Data: servico
    });
});

router.put('/alterar', async (req: Request, res: Response) => {
    const { id } = req.body;

    const servico = await Servico.update({ ...req.body }, { where: { id: id } });

    return res.status(200).json({
        Ok: true,
        Data: servico
    });
});

router.delete('/delete', async (req: Request, res: Response) => {
    const { id } = req.body;

    await Servico.destroy({ where: { id: id } });

    return res.status(200).json({
        Ok: true
    });
});

export default router;