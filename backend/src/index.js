const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);


/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 *
 * GET: Buscar uma imformação do back-end.
 * POST: Criar uma imformação no back-end.
 * PUT: Alterar uma imformação no back-end.
 * DELETE: Deletar uma imformação no back-end.
 */

/**
 * Tipos de parãmetros:
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filros , Paginação)
 * Route Params: Parãmetros utilizados para indeficar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * Banco Dados:
 * SQL: MySQL , SQLite, PstgreSQL, etc.
 * NoSQL:MongoDB, CouchDB, etc.
 */

