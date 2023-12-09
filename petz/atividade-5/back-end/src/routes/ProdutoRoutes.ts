import { Request, Response, Router } from "express";
import Cliente from "../models/Cliente";
import Empresa from "../models/Empresa";
import Produto from "../models/Produto";

const router = Router();

router.get('/all', async (req: Request, res: Response) => {
    const produtos = await Produto.findAll({ include: [ Cliente, Empresa ] });

    return res.status(200).json({
        Ok: true,
        Data: produtos
    });
});

router.post('/view', async (req: Request, res: Response) => {
    const { id } = req.body;

    const produto = await Produto.findOne({ where: { id: id }, include: [ Cliente, Empresa ] });

    return res.status(200).json({
        Ok: true,
        Data: produto
    });
});

router.post('/new', async (req: Request, res: Response) => {
    const produto = await Produto.create({ ...req.body });

    return res.status(200).json({
        Ok: true,
        Data: produto
    });
});

router.put('/alterar', async (req: Request, res: Response) => {
    const { id } = req.body;

    const produto = await Produto.update({ ...req.body }, { where: { id: id } });

    return res.status(200).json({
        Ok: true,
        Data: produto
    });
});

router.delete('/delete', async (req: Request, res: Response) => {
    const { id } = req.body;

    await Produto.destroy({ where: { id: id } });

    return res.status(200).json({
        Ok: true
    });
});

export default router;
