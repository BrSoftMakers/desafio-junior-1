const { connect } = require('../infraestrutura/conexao')
const conexao = require('../infraestrutura/conexao')

class AnimalDeEstimacao{
    adicionar(formulario, res){

        const sql = 'INSERT INTO AnimaisDeEstimacao SET ?'

        conexao.query(sql, formulario, (erro, resultados) => {

            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(201).json(formulario)
            }

        })

    }

    listar(res){
        const sql = 'SELECT * FROM AnimaisDeEstimacao'

        conexao.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultados)
            }
        })
    }

    buscarPorId(id, res){
        const sql = 'SELECT * FROM AnimaisDeEstimacao WHERE id = ?'

        conexao.query(sql,id, (erro, resultados) =>{
            const linha = resultados[0]
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(linha)
            }
        })
    }

    alterar(id, valores, res){
        const sql = 'UPDATE AnimaisDeEstimacao SET ? WHERE id = ?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json({...valores, id})
            }
        })
    }

    remover(id, res){
        const sql = 'DELETE FROM AnimaisDeEstimacao WHERE id = ?'

        conexao.query(sql, id, (erro) => {
            if(erro){
                res.status(400).json(erro, resultados)
            }else{
                res.status(200).json({id})
            }
        })
    }

}

module.exports = new AnimalDeEstimacao