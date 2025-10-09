const express = require("express");

const rotas = express.Router();

const produtoController = require("../controllers/produtoController");

rotas.get("/cadastrar", produtoController.formCadastroProduto);

rotas.post("/cadastrar", produtoController.salvarProduto);

rotas.get("/", produtoController.listarProdutos);

rotas.get("/:id", produtoController.buscarProduto);

rotas.put("/:id", produtoController.atualizarProduto);

rotas.delete("/:id", produtoController.deletarProduto);

module.exports = rotas;
