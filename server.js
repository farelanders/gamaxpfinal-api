const routes = require('./src/routes/usersRouter');

const express = require('express');

const server = express();

const cors = require('cors');

const PORT = process.env.PORT || 3333;

console.log("Aplicação está em execução...");

server.use(cors());

server.use(express.json());

server.use(routes);

server.listen(PORT);