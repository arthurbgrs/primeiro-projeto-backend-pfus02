const db = require("../data/db.json");
const { salvar, atualizar } = require("./userModel");

let listaProdutos = db.produtos;

module.exports = {
  salvar: ({ nome, descricao, preco, quantidade, categoria, imagemUrl }) => {
    const novoProduto = {
      id: listaProdutos.length + 1,
      nome,
      descricao,
      preco,
      quantidade,
      categoria,
      imagemUrl
    };
    listaProdutos.push(novoProduto)
    console.log("novo produto salvo: ", novoProduto);
    return novoProduto
  },
  listarTodosProdutos: () => {
    return listaProdutos
  },
  buscarProdutoId: (id) => {
    return listaProdutos.find((produto) => produto.id == id || null);
  },
  atualizar: (id, { nome, descricao, preco, quantidade, categoria }) => {
     const index = listaProdutos.findIndex((user) => user.id == id|| null);
    
    if (index === -1) return null;
    
    listaProdutos[index] = {
      ...listaProdutos[index],
      listaProdutos: nome || listaProdutos[index].nome,
      listaProdutos: descricao || listaProdutos[index].descricao,
      listaProdutos: preco || listaProdutos[index].preco,
      listaProdutos: quantidade || listaProdutos[index].quantidade,
      listaProdutos: categoria || listaProdutos[index].categoria,
    };
  
    return listaProdutos[index];
  },
  deletar: (id) => {
    const index = listaProdutos.findIndex((produto) => produto.id == id);
    if (index === -1) return false;
    listaProdutos.splice(index, 1);
    return true;
  },
  }
