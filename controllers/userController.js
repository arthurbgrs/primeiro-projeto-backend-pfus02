// importa o modulo de path para saber as pastas e arquivos do projeto
const path = require("path");

// importa tudo que tem no model
const userModel = require("../models/userModel");

module.exports = {
  // responde a requisição mostrando a visualização da tela de login
  formLogin: (req, res) => {
    res.render("login");
  },
   // função para levar os dados preenchidos para o model realizar o login 
  loginUsuario: (req, res) => {
    // cria um objeto com as informações do body, retirados dos inputs
    const { email, senha } = req.body;
    // manda as informações do objeto para o model
    const logado = userModel.login(email, senha);
    // se não conseguiu logar, manda uma mensagem de erro
    if (!logado) {
        return res.status(401).json({mensagem: "Usuario ou senha invalidos"})
    }
    // se conseguiu manda mensagem de confirmação
    else{
        res.json({mensagem: "login realizado"})
    }
  },
};
