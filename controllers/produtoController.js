const path = require("path");

const produtoModel = require("../models/produtoModel");

module.exports = {

formCadastroProduto: (req, res) => {
  res.render("produtos/cadastroProdutos", {titulo: "cadastrio"});
},
salvarProduto: (req, res) => {
  const { produtos,nome, descricao, preco, quantidade, categoria, imagemUrl } = req.body;
  produtoNovo = produtoModel.salvar({ produtos,nome, descricao, preco, quantidade, categoria, imagemUrl });
  res.render("produtos/confirmacaoProduto", {
    tipo: "cadastro",
    titulo: "cadastro confirmado",
    produtoNovo
  });
},
listarProdutos: (req,res) => {
    const produtos = produtoModel.listarTodosProdutos()
    res.render("produtos/listaProdutos", { produtos, titulo:"Lista de produtos" });
},
 buscarProduto: (req,res) => {
    const id = req.params.id

     const produto = produtoModel.buscarProdutoId(id)

      if(!produto){
      return res.status(404).json({mensagem: "Produto não encontrado"})
      }
 res.json(produto)
},
atualizarProduto: (req,res) => {
    const id = req.params.id

    const { nome, descricao, preco, quantidade, categoria } = req.body

    const produtoAtualizado = produtoModel.atualizar(id, { nome, descricao, preco, quantidade, categoria })
    if(!produtoAtualizado){
      return res.status(404).json({mensagem: "Produto não encontrado"})
}
res.json({mensagem: "Produto atualizado"})
},
deletarProduto: (req,res) => {
    const id = req.params.id

    const deletados = produtoModel.deletar(id)
    if(!deletados){
      return res.status(404).json({mensagem: "Usuario não encontrado"})
    }
    res.json({mensagem: "Produto deletado"})
  },
}
