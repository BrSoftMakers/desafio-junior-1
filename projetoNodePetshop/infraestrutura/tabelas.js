class Tabelas {
    init(conexao) {
        this.conexao = conexao
        this.criarTabelas()
    }

    criarTabelas() {
        const sql = 'CREATE TABLE IF NOT EXISTS AnimaisDeEstimacao (id int NOT NULL AUTO_INCREMENT, nome varchar(20) NOT NULL, idade int NOT NULL, tipo varchar(8) NOT NULL, raca varchar(20) NOT NULL, nomeDoDono varchar(30) NOT NULL, telefone varchar(11) NOT NULL, PRIMARY KEY(id))'
       
        this.conexao.query(sql, (erro) => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabelas criadas')
            }
        })
    }
}

module.exports = new Tabelas