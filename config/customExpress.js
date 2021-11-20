
// Chamando a biblioteca
const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')


module.exports = () =>{
    const app = express()

    //o use faz parte do express
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    //tudo o que for controller o app sabe
    consign()
        .include('controllers')
        .into(app)

        return app
}

