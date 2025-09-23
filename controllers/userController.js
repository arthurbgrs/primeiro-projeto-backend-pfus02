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
      return res.status(401).json({ mensagem: "Usuario ou senha invalidos" });
    }
    // se conseguiu manda mensagem de confirmação
    else {
      res.json({ mensagem: "login realizado" });
    }
  },

  // CRUD
  // Responde a requisição mostrando a visualização da tela de cadastro
  formCadastro: (req, res) => {
    res.render("cadastro");
  },
  // Função para levar os dados preenchidos para o model realizar o cadastro
  salvarUsuario: (req, res) => {
    const {usuario,email,senha} = req.body
    userModel.salvar({usuario,email,senha})
    res.render("cadastroConfirmado")
  },
  // R
  // Fumção para mostrar todos os usuarios
  listarUsuarios: (req,res) => {
    const usuarios = userModel.listarTodos()
    res.json(usuarios)
    //res.render("usuarios", { usuarios })
  },
  // função para mostrar apenas um usuario
  buscarUsuario: (req,res) => {
    // Busca o id vindo da url como parametro
    const id = req.params.id
    // Guarda o usuario retornado, depois de buscar pelo model
    const usuario = userModel.buscarPorId(id)

    // Se não achar, avisa que deu erro
    if(!usuario){
      return res.status(404).json({mensagem: "Usuario não encontrado"})
    }

    res.json(usuario)
  },
  atualizarUsuario: (req,res) => {
    // Busca o id vindo da url como parametro
    const id = req.params.id
    // Busca as novas informações para atualizar
    const { usuario,email,senha } = req.body

    const usuarioAtualizado = userModel.atualizar(id, { usuario,email,senha })
    if(!usuarioAtualizado){
      return res.status(404).json({mensagem: "Usuario não encontrado"})
    }
    res.json({mensagem: "usuario encontrado"})
  },
  deletarUsuario: (req,res) => {
    const id = req.params.id

    const deletado = userModel.deletar(id)
    if(!deletado){
      return res.status(404).json({mensagem: "Usuario não encontrado"})
    }
    res.json({mensagem: "usuario deletado"})
  },
}
  
