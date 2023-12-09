import Produto from "../modelo/produto";

export default class SelecionadorProdutos {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        this.produtos = produtos
    }
    
    public selecionar(nomeProduto: string) {
        let produtoAlvo = new Produto(nomeProduto, 0, '','')
        this.produtos.forEach(produto => {
            if (nomeProduto === produto.nome) {
                produtoAlvo = produto
            }
        })
        return produtoAlvo
    }
}