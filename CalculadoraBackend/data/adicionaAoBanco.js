const conexao = require('../infraestrutura/conexao.js')

class AdicionarValores{
    AdicionaValores(body,res){
        const sql_insert = `INSERT INTO valores_medidas(medida_digitada,medida_convertida) VALUES ('${body.valorDigitado} ${body.converterDE}s','${body.valorConvertido} ${body.converterPARA}s');`

        conexao.query(sql_insert, (erro_insert,result)=>{
            if(erro_insert){
                console.log("Deu erro ao inserir  no banco de dadoso valor digitado", erro_insert)
            }
            else{
                console.log("Dado recebido armazenado com sucesso\n",result)
                
            }
        })
    }

}

module.exports = new AdicionarValores