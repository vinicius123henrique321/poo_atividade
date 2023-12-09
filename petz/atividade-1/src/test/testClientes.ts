// import { format } from "path";
// import Cliente from "../modelo/cliente";
// import CPF from "../modelo/cpf";
// import Pet from "../modelo/pet";
// var casual = require('casual');

// let pet1 = new Pet (casual.name, 'gato', 'persa', 'M');
// let cpf02 = new CPF("02", new Date(2023, 5, 2))
// let cliente1 = new Cliente ('cliente1','clienteUm', cpf02, pet1,  )

import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import CPF from "../modelo/cpf";
import Produto from "../modelo/produto";
import ListagemClientes from "../negocio/listagemClientes";
import Empresa from "../modelo/empresa";

let nome01 = "Camila"
let nomeSocial01 = "Camila Redondo"
let nome02 = "Pedro"
let nomeSocial02 = "Pedro Redondo"
let cpf01 = new CPF("01", new Date(2023, 5, 2))
let cpf02 = new CPF("02", new Date(2023, 5, 2))
let rg01 = new RG("00000", new Date(2023, 5, 1));
let rgs : RG [] = []

rgs.push(rg01)
let dataCadastro = new Date()
let telefones : Telefone [] = []
telefones.push(new Telefone("12", "98190-9172"))
let pets01 : Pet[] = []
let pets02 : Pet[] = []
pets01.push(new Pet("Ollie", "Bulldog", "F", "cachorro"), new Pet("Flocky", "Siames", "M", "gato"))
pets02.push(new Pet("Holly", "Bulldog", "F", "cachorro"), new Pet("Tico", "Arara", "M", "passarinho"))

let cliente01 = new Cliente(nome01, nomeSocial01, cpf01, pets01, telefones , dataCadastro,  rgs );
let cliente02 = new Cliente(nome02, nomeSocial02, cpf02, pets02, telefones , dataCadastro,  rgs );

let produto01 = new Produto("Racao", 100, "gato", "Siames")
let produto02 = new Produto("Petisco", 30, "cachorro", "Arara")
let produto03 = new Produto("Bolinha", 50, "cachorro", "Geral")
let produto04 = new Produto("Fralda", 500, "cachorro", "Geral")
let produto05 = new Produto("Ursinho", 501, "cachorro", "Geral")
let produto06 = new Produto("Pijama", 511, "cachorro", "Bulldog")

cliente01.setProdutosConsumidos = produto01
cliente01.setProdutosConsumidos = produto02
cliente01.setProdutosConsumidos = produto03

cliente02.setProdutosConsumidos = produto04
cliente02.setProdutosConsumidos = produto05
cliente02.setProdutosConsumidos = produto06
cliente02.setProdutosConsumidos = produto06
cliente02.setProdutosConsumidos = produto03

let clientes = []

clientes.push(cliente01, cliente02)

let listagemProdutosMaisConsumidosPorRacaPet = new ListagemClientes(clientes)

listagemProdutosMaisConsumidosPorRacaPet.listarProdutosMaisConsumidosPorRacaPets()