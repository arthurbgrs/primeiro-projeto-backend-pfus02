// importar o json para servir como banco de dados
const db = require("../data/db.json");

// variavel para armazenar os usuarios vindos do db
let listaUsuarios = db.usuarios;

module.exports = {
    // login
  // função para validar o login
  login: (usuario, senha) => {
    // busca na lista de usuarios, se tem aquele usuario com a informações que ele me passou
    let logado =
      listaUsuarios.find((user) => {
        user.email === usuario && user.senha === senha;
      }) || null;
    return logado;
  },
};
