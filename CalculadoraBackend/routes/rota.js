const AddBanco = require('../data/adicionaAoBanco.js')

module.exports = app => {
    app.get('/calculadora', (req,res)=> {
        res.render('calculadora')
    })

    app.post('/calculadora/add-valor', (req,res) => {
        console.log("Entrou no post")
        const body = JSON.parse(JSON.stringify(req.body))
        console.log(body)
        AddBanco.AdicionaValores(body,res)
    })
}