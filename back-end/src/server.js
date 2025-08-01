import app from "./app.js"
import conexao from "./app/model/conexao.js"

const port = 3000

conexao.connect(erro =>{
    if(erro){
        console.log("Falha na conexão :(")
        return
    }
    console.log("Conexão realizada com sucesso :)")
    app.listen(port, () =>{
        console.log(`Servidor: http://localhost:${port}`)
    })
    
})
