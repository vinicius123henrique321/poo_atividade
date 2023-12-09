import { Request, Response, Router } from "express";
import Cliente from "../models/Cliente";
import Pet from "../models/Pet";

const router = Router();

router.get('/all', async (req: Request, res: Response) => {
    const pets = await Pet.findAll({ include: [ Cliente ] });

    return res.status(200).json({
        Ok: true,
        Data: pets
    });
});

router.post('/find', async (req: Request, res: Response) => {
    const { clienteId } = req.body;

    const pets = await Pet.findAll({ where: { clienteId: clienteId },include: [ Cliente ] });

    return res.status(200).json({
        Ok: true,
        Data: pets
    });
});

router.post('/new', async (req: Request, res: Response) => {
    const pet = await Pet.create({ ...req.body });

    return res.status(200).json({
        Ok: true,
        Data: pet
    });
});

router.put('/alterar', async (req: Request, res: Response) => {
    const { id } = req.body;

    const pet = await Pet.update({ ...req.body }, { where: { id: id } });

    return res.status(200).json({
        Ok: true,
        Data: pet
    });
});

router.delete('/delete', async (req: Request, res: Response) => {
    const { id } = req.body;

    await Pet.destroy({ where: { id: id } });

    return res.status(200).json({
        Ok: true
    });
});

export default router;