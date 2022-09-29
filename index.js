/* IMPORTAÇÃO DO PACOTE EXPRESS: */
const express = require('express');

/* IMPORTAÇÃO DA CONTROLLER DE CATEGORIA DE CARROS */
const categoriaController = require('./controller/CategoriaController');

/* CRIAÇÃO DE UMA INSTANCIA EXECUTAVEL DO EXPRESS */
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

/* ROTAS DE CATEGORIA DE CARROS: */

app.use('/', categoriaController);

app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO EM: http://localhost:3000');
});