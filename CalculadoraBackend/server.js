const requireExpress = require('./config/express.js')
const conexao = require('./infraestrutura/conexao.js')
const Tables = require('./infraestrutura/createTable')
const port = 8081

conexao.connect(erro => {
    if(erro){
        console.log('deu erro no connect:',erro)
    }
    else{
        Tables.init(conexao)
        const app = requireExpress()

        app.listen(port, () => {
            console.log(`Servivor rodando na porta ${port}`)
        })

        console.log("Conectado com sucesso!")
    }

})
