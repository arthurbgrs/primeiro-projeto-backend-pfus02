// importando do modulo express
const express = require("express");

// Criando uma variavel para gerenciar as rotas de usuario
const roteador = express.Router();

// importando tudo que tem no arquivo de contraller do usuario
const userController = require("../controllers/userController");

// rota para solicitar a pagina de login
roteador.get("/login", userController.formLogin);
// rota para enviar dados na pagina de login
roteador.post("/login", userController.loginUsuario);

// CRUD

// C = CRIAR NVOVO USUARIO
// Rota para solicitar a pagina de cadastro
roteador.get("/cadastrar", userController.formCadastro)
// Rota para envia dados de cadastro
roteador.post("/cadastrar", userController.salvarUsuario)

// R = OBTER INFORMAÇÕES DE USUARIOS
roteador.get("/", userController.listarUsuarios)
// Retorna as informações de um usuario apenas
roteador.get("/:id", userController.listarUsuarios)

// U = ATUALIZAR UM USUARIO
roteador.put("/:id", userController.atualizarUsuario)

// D = DELETAR USUARIO
roteador.delete("/:id", userController.deletarUsuario)

// criando a exportação desse arquivo
module.exports = roteador;
