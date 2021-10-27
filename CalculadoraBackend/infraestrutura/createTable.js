class Tables{
    init(conexao){
        console.log("Tabelas foram chamadas!")
        this.conxao = conexao
        this.criarTabela(conexao)
    }

    criarTabela(conexao){
        const sql = 'CREATE TABLE IF NOT EXISTS valores_medidas (id int NOT NULL AUTO_INCREMENT, medida_digitada varchar(50), medida_convertida varchar(50), PRIMARY KEY(id));'

        conexao.query(sql,(erro) => {
            if(erro){
                console.log(erro)
            }
            else{
                console.log("Tabela valoresMedidas criada com sucesso!")
            }
        })
    }
}

module.exports = new Tables