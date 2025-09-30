const express = require("express");
//baixado do node
const app = express();

const port = 5000;

const path = require("path");
const caminho = path.join(__dirname, "views");

// importações
// importa as rotas de usuario
const userRoutes = require("./routes/userRoutes");

const produtoRoutes = require("./routes/produtoRoutes");

// interpretador de json, para tratar as informações do body
app.use(express.urlencoded({ extend: true }));
app.use(express.json());
// cria uma rota para as sub rotas de usuario
app.use("/usuarios", userRoutes);

app.use("/produtos", produtoRoutes);

//defininfo o ejs como template engine
app.set("view engine", "ejs");
// definindo 'atalho' onde buscar as views
app.set("views", path.join(__dirname, "views"));
//página de home do site
app.get("/home", (req, res) => {
  res.status(200);
  res.render("index", { titulo: "página inicial" });
});

//rota inicial do projeto
app.get("/", (req, res) => {
  res.status(200).render("index", { titulo: "página inicial" });
});

//levar para a página de erro
app.use((req, res) => {
  res.status(404);
  res.render("404", { titulo: "página de erro"});
});

// subir o servidor
app.listen(port, () => {
  console.log(`Servidor funcionando em http://localhost:${port}`);
});
