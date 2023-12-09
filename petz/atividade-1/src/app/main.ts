import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastroCliente";
import ListagemClientes from "../negocio/listagemClientes";
import Selecionador from "../negocio/selecionador";
import EditorCliente from "../negocio/editorCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import ListagemProdutos from "../negocio/listagemProdutos";
import EditorProduto from "../negocio/editorProduto";
import SelecionadorProdutos from "../negocio/selecionadorProduto";
import CadastroServico from "../negocio/cadastroServico";
import ListagemServicos from "../negocio/listagemServicos";
import EditorServico from "../negocio/editorServico";
import SelecionadorServicos from "../negocio/selecionadorServicos";
import ConsumoServico from "../negocio/consumoServico";
import ConsumoProduto from "../negocio/consumoProduto";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1  - Cadastrar cliente`);
    console.log(`2  - Listar todos os clientes`);
    console.log(`3  - Editar cliente`)
    console.log(`4  - Deletar cliente`)
    console.log(`5  - Cadastrar novo produto`)
    console.log(`6  - Listar produtos cadastrados`)
    console.log(`7  - Editar produtos cadastrados`)
    console.log(`8  - Deletar produto`)
    console.log(`9  - Cadastrar novo serviço`)
    console.log(`10 - Listar serviços cadastrados`)
    console.log(`11 - Editar serviço`)
    console.log(`12 - Deletar serviço`)
    console.log(`13 - Cadastrar consumo de Produto`);
    console.log(`14 - Cadastrar consumo de Serviços`);
    console.log(`15 - Listar os 10 clientes que mais consumiram produtos ou servicos`);
    console.log(`16 - Listar os servicos ou produtos mais consumidos`);
    console.log(`17 - Listar os 5 clientes que mais consumiram em valor`);
    console.log(`18 - Listar os produtos mais consumidos por tipo de Pet`);
    console.log(`19 - Listar os servicos mais consumidos por tipo de Pet`);
    console.log(`20 - Listar os produtos mais consumidos por tipo de Pet`);
    console.log(`21 - Listar os serviços mais consumidos por tipo de Pet`);
    console.log(`0  - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 3:
            let cpfEditar = entrada.receberTexto('Digite um cpf para edição: ')
            let selecionadorClienteEditar = new Selecionador (empresa.getClientes)
            let clienteEditar = selecionadorClienteEditar.selecionar(cpfEditar)

            let editor = new EditorCliente()
            editor.editar(clienteEditar)
            break;
        case 4:
            let cpf = entrada.receberTexto('Digite um cpf para exclusão: ')
            let selecionadorCliente = new Selecionador (empresa.getClientes)
            let cliente = selecionadorCliente.selecionar(cpf)

            let indice = empresa.getClientes.indexOf(cliente)
            delete empresa.getClientes[indice]
            break;
        case 5:
            let cadastroProdutos = new CadastroProduto(empresa.getProdutos);
            cadastroProdutos.cadastrar();
            break;
        case 6:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
            listagemProdutos.listar()
            break
        case 7:
            let nomeEditar = entrada.receberTexto('Digite o nome do produto para edição: ')
            let selecionadorProdutoEditar = new SelecionadorProdutos(empresa.getProdutos)
            let produtoEditar = selecionadorProdutoEditar.selecionar(nomeEditar)

            let editorProduto = new EditorProduto()
            editorProduto.editar(produtoEditar)
            break
        case 8:
            let nomeProduto = entrada.receberTexto('Digite o nome do Produto para exclusão: ')
            let selecionadorProduto = new SelecionadorProdutos(empresa.getProdutos)
            let produto = selecionadorProduto.selecionar(nomeProduto)

            let indiceProduto = empresa.getProdutos.indexOf(produto)
            delete empresa.getProdutos[indiceProduto]
            break;
        case 9:
            let cadastroServicos = new CadastroServico(empresa.getServicos)
            cadastroServicos.cadastrar()
            break;
        case 10:
            let listagemServicos = new ListagemServicos(empresa.getServicos)
            listagemServicos.listar()
            break
        case 11:
            let nomeServicoEditar = entrada.receberTexto('Digite o nome do serviço para edição: ')
            let selecionadorServicoEditar = new SelecionadorServicos(empresa.getServicos)
            let servicoEditar = selecionadorServicoEditar.selecionar(nomeServicoEditar)

            let editorServico = new EditorServico()
            editorServico.editar(servicoEditar)
            break;
        case 12:
            let nomeServico = entrada.receberTexto('Digite o nome do Servico para exclusão: ')
            let selecionadorServico = new SelecionadorServicos(empresa.getServicos)
            let servico = selecionadorServico.selecionar(nomeServico)

            let indiceServico = empresa.getServicos.indexOf(servico)
            delete empresa.getServicos[indiceServico]
            break;
        case 13:
            let cpfConsumoProduto = entrada.receberTexto('Digite um cpf para cadastrar consumo de produtos: ')
            let selecionadorClienteConsumoProduto = new Selecionador(empresa.getClientes)
            let clienteConsumidorProduto = selecionadorClienteConsumoProduto.selecionar(cpfConsumoProduto)

            let nomeProdutoConsumido = entrada.receberTexto('Digite o nome do produto: ')
            let selecionadorProdutoConsumo = new SelecionadorProdutos(empresa.getProdutos)
            let produtoConsumido = selecionadorProdutoConsumo.selecionar(nomeProdutoConsumido)

            let cadastroConsumoProduto = new ConsumoProduto()
            cadastroConsumoProduto.cadastrarConsumoProduto(clienteConsumidorProduto, produtoConsumido)
            break;
        case 14:
            let cpfConsumoServico = entrada.receberTexto('Digite um cpf para cadastrar consumo de serviço: ')
            let selecionadorClienteConsumoServico = new Selecionador(empresa.getClientes)
            let clienteConsumidorServico = selecionadorClienteConsumoServico.selecionar(cpfConsumoServico)

            let nomeServicoConsumido = entrada.receberTexto('Digite o nome do servico: ')
            let selecionadorServicoConsumo = new SelecionadorServicos(empresa.getServicos)
            let servicoConsumido = selecionadorServicoConsumo.selecionar(nomeServicoConsumido)

            let cadastroConsumoServico = new ConsumoServico()
            cadastroConsumoServico.cadastrarConsumoServico(clienteConsumidorServico, servicoConsumido)
            break;
        case 15:
            let listagemMaioresConsumidores = new ListagemClientes(empresa.getClientes)
            listagemMaioresConsumidores.listarMaioresConsumidoresDeProdutosOuServicos()
            break;
        case 16:
            let listagemProdutosOuServicosMaisConsumidos = new ListagemClientes(empresa.getClientes)
            listagemProdutosOuServicosMaisConsumidos.listarProdutosOuServicosMaisConsumidos()
            break;
        case 17:
            let listagemClientesQueMaisConsumiramEmValor = new ListagemClientes(empresa.getClientes)
            listagemClientesQueMaisConsumiramEmValor.listarClientesQueMaisConsumiramEmValor()
            break;
        case 18:
            let listagemProdutosMaisConsumidosPorTipoPet = new ListagemClientes(empresa.getClientes)
            listagemProdutosMaisConsumidosPorTipoPet.listarProdutosMaisConsumidosPorTipoPets()
            break;
        case 19:
            let listagemServicosMaisConsumidosPorTipoPet = new ListagemClientes(empresa.getClientes)
            listagemServicosMaisConsumidosPorTipoPet.listarServicosMaisConsumidosPorTipoPets()
            break;
        case 20:
            let listagemProdutosMaisConsumidosPorRacaPet = new ListagemClientes(empresa.getClientes)
            listagemProdutosMaisConsumidosPorRacaPet.listarProdutosMaisConsumidosPorRacaPets()
            break;
        case 21:
            let listagemServicosMaisConsumidosPorRacaPet = new ListagemClientes(empresa.getClientes)
            listagemServicosMaisConsumidosPorRacaPet.listarServicosMaisConsumidosPorRacaPets()
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }

    


}