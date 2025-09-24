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
      listaUsuarios.find(
        (user) => user.email === usuario && user.senha === senha
      ) || null;
    return logado;
  },
  // CRUD
  // Função para cadastrar um novo usuario
  salvar: ({ usuario, email, senha }) => {
    const novoUsuario = {
      id: listaUsuarios.length + 1,
      usuario,
      email,
      senha,
    };
    listaUsuarios.push(novoUsuario);
    console.log("Novo usuario salvo: ", novoUsuario);
    return novoUsuario;
  },
  // Buscar todos os usuarios
  listarTodos: () => {
    return listaUsuarios;
  },
  // Busca um usuario especifico do banco
  buscarPorId: (id) => {
    return listaUsuarios.find((user) => user.id == id || null);
  },
  atualizar: (id, { usuario, email, senha }) => {
  // Busca na lista de usuarios, um usuario com aquele id especifico, se achar, pega o index dele e guarda na variavel index
    const index = listaUsuarios.findIndex((user) => user.id || null);
    // Se não achar, significa que um usuario com aqule index não existe
    if (index === -1) return null;
    // Se achar um usuario, substitui as informações que estavam nele, pelas novas enviadas
    listaUsuarios[index] = {
      ...listaUsuarios[index],
      listaUsuarios: usuario || listaUsuarios[index].usuario,
      listaUsuarios: email || listaUsuarios[index].email,
      listaUsuarios: senha || listaUsuarios[index].senha,
    };
    // Retorna o usuario atualizado
    return listaUsuarios[index];
  },
  deletar: (id) => {
    const index = listaUsuarios.findIndex((user) => user.id == id);
    if (index === -1) return false;
    listaUsuarios.splice(index, 1);
    return true;
  },
};
