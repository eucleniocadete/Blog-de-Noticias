import conexao from "./conexao.js"

function fazerConsulta(consulta, dados='', mensagemErro){
    return new Promise((resolve, reject) =>{
        conexao.query(consulta, dados, (erro, ok) =>{
            if(erro)
                return reject(mensagemErro)
            return resolve(JSON.parse(JSON.stringify(ok)))
        })
    })
}

export default fazerConsulta
