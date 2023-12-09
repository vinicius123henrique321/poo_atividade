import { Request, Response, Router } from "express";
import Empresa from "../models/Empresa";
import Cliente from "../models/Cliente";
import Servico from "../models/Servico";
import Produto from "../models/Produto";

const router = Router();

router.get('/all', async (req: Request, res: Response) => {
    const empresas = await Empresa.findAll({ include: [ Cliente, Servico, Produto ] });

    return res.status(200).json({
        Ok: true,
        Data: empresas
    });
});

router.post('/new', async (req: Request, res: Response) => {
    await Empresa.create({ ...req.body });

    return res.status(200).json({ Ok: true });
});

router.delete('/delete', async (req: Request, res: Response) => {
    const { id }: Empresa = req.body

    await Empresa.destroy({ where: { id: id } });

    return res.status(200).json({ Ok: true });
});

export default router;