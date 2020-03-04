const express = require('express');

const controls = require('./app/controllers/index');

const routes = express.Router();

//REGISTRAR O USUARIO
routes.post('/usuario', controls.usuario.register);

//BUSCAR TODOS OS USUARIOS
routes.get('/usuarios', controls.usuario.index);

//BUSCAR USUARIO POR PK
routes.get('/usuario', controls.usuario.show);

//BUSCAR USUARIOS PERTENCENTESA A UM MEDIADOR
routes.get('/mediador', controls.usuario.mediador);

//ATUALIZAR DADOS DO USUARIO
routes.put('/usuario/:id', controls.usuario.update);

module.exports = routes;

//EXEMPLOS DE COMO PEGAR PARAMETROS DE CRUD,

//SELECTS USAM QUERY PARAMS, QUE SAO OS ?id=xxx DA URL
// routes.get('/select', (req, res) => {
//     return res.json({ "message": req.query.id });
// });

//UPDATES E DELETES USAM ROUTE PARAMS, QUE SAO /xxx DA URL
// routes.put('/update/:id', (req, res) => {
//     return res.json({ "message": req.params.id });
// });

// routes.delete('/delete/:id', (req, res) => {
//     return res.json({ "message": req.params.id });
// });

//CREATES USAM BODY PARAMS, QUE É UM ARQUIVO JSNON QUE O ENZO VAI MANDAR, ESSE É O MAIS FÁCIL DE TODOS
// routes.post('/insert', (req, res) => {
//     return res.json(req.body);
// });