const express = require("express");
const mongoose = require("mongoose"); //ORM ferramenta para banco de dados
const routes = require("./routes");
const cors = require("cors");

const server = express(); //Criando o servidor do express

mongoose.connect(
  "mongodb+srv://dev:dev@cluster0-q87at.mongodb.net/tinderdev?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
); // Conexão com Banco de Dados
server.use(cors());
server.use(express.json()); // Para express entender JSON

server.use(routes); // Usando a rota que foram importadas

server.listen(3333); //Start a porta onde irá rodar nossa api
