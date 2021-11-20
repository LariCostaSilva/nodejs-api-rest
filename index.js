// Chamando a biblioteca
const express = require('express')
const consign = require('consign')

const app = express()

//tudo o que for controller o app sabe
consign()
    .include('controllers')
    .into(app)

//Identificando a rota e testando
app.listen(3000, () => console.log('Servidor rodando'))


