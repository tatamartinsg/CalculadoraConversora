const express = require("express");
const bodyParser = require("body-parser")
const consign = require("consign")
const handlebars = require("express-handlebars")

module.exports = () => {
    const app = express()

    //'pegar' o js do front e o css
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });
    
    app.use(express.static('public'));
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(bodyParser.json())

    app.engine('handlebars', handlebars({defaultLayout:'main'}))
    app.set('view engine', 'handlebars')

    consign() //serve para interligar as rotas que estao em um arquivo js separado!!
        .include('routes')
        .into(app)

    return app;
}