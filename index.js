const express = require("express");

const app = express();

const port = 5000;

app.get("/pokemon", (req, res) => {
  res.status(200).send("charmander");
});

const path = require("path");
const caminho = path.join(__dirname, "views");

app.get("/home", (req, res) => {
  res.status(200);
  res.sendFile(`${caminho}/index.html`);
});
app.use((req, res) => {
  res.status(404);
  res.sendFile(`${caminho}/404.html`);
});

//coloca no site
app.get("/", (req, res) => {
  res.status(200).send("Olá, parabéns conseguiu");
});

// atualiza o site em tempo real
app.listen(port, () => {
  console.log(`Servidor funcionando em http://localhost:${port}`);
});
