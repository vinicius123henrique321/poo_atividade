import { Router, Request, Response } from "express";
import Empresa from "../models/Empresa";
import Cliente from "../models/Cliente";
import Produto from "../models/Produto";
import Servico from "../models/Servico";
import Pet from "../models/Pet";
import CPF from "../models/CPF";
import RG from "../models/RG";
import Telefone from "../models/Telefone";
import ClienteProduto from "../models/ClienteProduto";

const router = Router();

router.post('/generate', (req: Request, res: Response) => {
    // Gerando empresas
    Empresa.bulkCreate([
        { nome: 'Empresa 1' },
        { nome: 'Empresa 2' },
        { nome: 'Empresa 3' },
    ]);

    // Gerando produtos
    Produto.bulkCreate([
        { nome: 'Produto 1', valor: '10', empresaId: 1 },
        { nome: 'Produto 2', valor: '20', empresaId: 1 },
        { nome: 'Produto 3', valor: '30', empresaId: 1 },
        { nome: 'Produto 4', valor: '40', empresaId: 2 },
        { nome: 'Produto 5', valor: '50', empresaId: 2 },
        { nome: 'Produto 6', valor: '60', empresaId: 2 },
        { nome: 'Produto 7', valor: '70', empresaId: 3 },
        { nome: 'Produto 8', valor: '80', empresaId: 3 },
        { nome: 'Produto 9', valor: '90', empresaId: 3 }
    ]);

    // Gerando serviços
    Servico.bulkCreate([
        { nome: 'Serviço 1', valor: '10', empresaId: 1 },
        { nome: 'Serviço 2', valor: '20', empresaId: 1 },
        { nome: 'Serviço 3', valor: '30', empresaId: 1 },
        { nome: 'Serviço 4', valor: '40', empresaId: 2 },
        { nome: 'Serviço 5', valor: '50', empresaId: 2 },
        { nome: 'Serviço 6', valor: '60', empresaId: 2 },
        { nome: 'Serviço 7', valor: '70', empresaId: 3 },
        { nome: 'Serviço 8', valor: '80', empresaId: 3 },
        { nome: 'Serviço 9', valor: '90', empresaId: 3 }
    ]);

    // Gerando clientes, RGs, CPFs, Pets e Telefones
    Cliente.create({
        nome: 'Alfredo',
        nomeSocial: 'Alfredo Junior',
        cpf: { valor: '123.456.789-00', dataEmissao: new Date() },
        rg: [
            { valor: '12.345.678-9A', dataEmissao: new Date() },
            { valor: '12.345.678-9B', dataEmissao: new Date() }
        ],
        pet: [
            { nome: 'JaEscrito', tipo: 'Cachorro', raca: 'Pug', genero: 'Homi' },
            { nome: 'Jorge', tipo: 'Gato', raca: 'Siamês', genero: 'Muie' }
        ],
        telefone: [
            { ddd: 12, numero: 912345678 },
            { ddd: 12, numero: 943218765 }
        ],
        empresaId: 1
    }, { include: [ CPF, RG, Pet, Telefone ] });

    Cliente.create({
        nome: 'Cornelia',
        nomeSocial: 'Cornelia Junior',
        cpf: { valor: '123.456.789-00', dataEmissao: new Date() },
        rg: [
            { valor: '12.345.678-9A', dataEmissao: new Date() },
            { valor: '12.345.678-9B', dataEmissao: new Date() }
        ],
        pet: [
            { nome: 'Cornelinho', tipo: 'Cachorro', raca: 'Pug', genero: 'Homi' },
            { nome: 'Cornao', tipo: 'Cachorro', raca: 'pintcher', genero: 'Homi' }
        ],
        telefone: [
            { ddd: 12, numero: 912345678 },
            { ddd: 12, numero: 943218765 }
        ],
        empresaId: 1
    }, { include: [ CPF, RG, Pet, Telefone ] });

    Cliente.create({
        nome: 'Jonas',
        nomeSocial: 'Jonas Junior',
        cpf: { valor: '123.456.789-00', dataEmissao: new Date() },
        rg: [
            { valor: '12.345.678-9A', dataEmissao: new Date() },
            { valor: '12.345.678-9B', dataEmissao: new Date() }
        ],
        pet: [
            { nome: 'Hulk', tipo: 'Cachorro', raca: 'Pug', genero: 'Homi' },
            { nome: 'Viuva negra', tipo: 'Cachorro', raca: 'pintcher', genero: 'Muie' }
        ],
        telefone: [
            { ddd: 12, numero: 912345678 },
            { ddd: 12, numero: 943218765 }
        ],
        empresaId: 2
    }, { include: [ CPF, RG, Pet, Telefone ] });

    Cliente.create({
        nome: 'Virginia',
        nomeSocial: 'Virginia Neta',
        cpf: { valor: '123.456.789-00', dataEmissao: new Date() },
        rg: [
            { valor: '12.345.678-9A', dataEmissao: new Date() },
            { valor: '12.345.678-9B', dataEmissao: new Date() }
        ],
        pet: [
            { nome: 'Perdi a criatividade aqui', tipo: 'Cachorro', raca: 'Pug', genero: 'Homi' },
            { nome: 'Cachorrinha', tipo: 'Cachorro', raca: 'pintcher', genero: 'Muie' }
        ],
        telefone: [
            { ddd: 12, numero: 912345678 },
            { ddd: 12, numero: 943218765 }
        ],
        empresaId: 2
    }, { include: [ CPF, RG, Pet, Telefone ] });

    Cliente.create({
        nome: 'Cliente 1-3',
        nomeSocial: 'Cliente 1-3 Junior',
        cpf: { valor: '123.456.789-00', dataEmissao: new Date() },
        rg: [
            { valor: '12.345.678-9A', dataEmissao: new Date() },
            { valor: '12.345.678-9B', dataEmissao: new Date() }
        ],
        pet: [
            { nome: 'Cachorro homi', tipo: 'Cachorro', raca: 'Pug', genero: 'Homi' },
            { nome: 'Cachorro muie', tipo: 'Cachorro', raca: 'pintcher', genero: 'Muie' }
        ],
        telefone: [
            { ddd: 12, numero: 912345678 },
            { ddd: 12, numero: 943218765 }
        ],
        empresaId: 3
    }, { include: [ CPF, RG, Pet, Telefone ] });

    Cliente.create({
        nome: 'Cliente 2-3',
        nomeSocial: 'Cliente 2-3 Junior',
        cpf: { valor: '123.456.789-00', dataEmissao: new Date() },
        rg: [
            { valor: '12.345.678-9A', dataEmissao: new Date() },
            { valor: '12.345.678-9B', dataEmissao: new Date() }
        ],
        pet: [
            { nome: 'Cachorro homi', tipo: 'Cachorro', raca: 'Pug', genero: 'Homi' },
            { nome: 'Cachorro muie', tipo: 'Cachorro', raca: 'pintcher', genero: 'Muie' }
        ],
        telefone: [
            { ddd: 12, numero: 912345678 },
            { ddd: 12, numero: 943218765 }
        ],
        empresaId: 3
    }, { include: [ CPF, RG, Pet, Telefone ] });

    // Gerando relação ClienteProduto e ClienteServiço
    // ClienteProduto.bulkCreate([
    //     {  }
    // ])

    res.status(200).json({
        Ok: true
    });
});

export default router;