const path = require("path");

const produtoModel = require("../models/produtoModel");

module.exports = {
  formCadastroProduto: (req, res) => {
    res.render("produtos/cadastroProdutos", { titulo: "cadastrio" });
  },
  salvarProduto: (req, res) => {
    const {
      produtos,
      nome,
      descricao,
      preco,
      quantidade,
      categoria,
      imagemUrl,
    } = req.body;
    produtoNovo = produtoModel.salvar({
      produtos,
      nome,
      descricao,
      preco,
      quantidade,
      categoria,
      imagemUrl,
    });
    res.render("produtos/confirmacaoProduto", {
      tipo: "cadastro",
      titulo: "cadastro confirmado",
      produtoNovo,
    });
  },
  listarProdutos: (req, res) => {
    const produtos = produtoModel.listarTodosProdutos();
    res.render("produtos/listaProdutos", {
      produtos,
      titulo: "Lista de produtos",
    });
  },
  buscarProduto: (req, res) => {
    const id = req.params.id;

    const produto = produtoModel.buscarProdutoId(id);

    console.log(produto);
    
    if (!produto) {
      return res.status(404).render("produtos/erroProduto", {
        titulo: "erro",
        mensagem: "Produto não encontrado",
      });
    }
    res.render("produtos/editarProduto", {
      titulo: "editar",
      produto,
    });
  },
  atualizarProduto: (req, res) => {
    const id = req.params.id;

    const { nome, descricao, preco, quantidade, categoria, imagemUrl } = req.body;

    const produtoAtualizado = produtoModel.atualizar(id, {
      nome,
      descricao,
      preco,
      quantidade,
      categoria,
      imagemUrl
    });
    if (!produtoAtualizado) {
      return res.status(404).render("produtos/erroProduto", {
        titulo: " Erro",
        mensagem: " Não foi possivel atualizar"
      })
    }
    // se atualizar, manda uma mensagem dizendo que deu certo
    res.render("produtos/confirmacaoProduto", {
      titulo: "edicao confirmada",
      tipo: "edicao",
      produtoAtualizado
    })
  },
  deletarProduto: (req, res) => {
    const id = req.params.id;

    const deletados = produtoModel.deletar(id);
    if (!deletados) {
      return res.status(404).json({ mensagem: "Usuario não encontrado" });
    }
    res.json({ mensagem: "Produto deletado" });
  },
};
