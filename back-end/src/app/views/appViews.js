import fazerConsulta from "../model/consulta.js"
import dayjs from "dayjs"

class blogViews{
    async login(dados){
        try {
            const consulta = "SELECT email, senha FROM tb_usuarios WHERE email=? AND senha=?"
            const resultConsulta = await fazerConsulta(consulta, [dados.email, dados.senha], "Erro ao efetuar login, tente mais tarde :(")
            
            if(resultConsulta.length == 0)
                return {naoExiste: "Email ou senha incorrectos :("}
            return {existe: "Login efetuado com sucesso :)"}
            
        } catch (error) {
            return {erro: error}
        }
        
    }

    async cadastro(dados){
        const consulta = "INSERT INTO tb_usuarios (nome, email, senha) VALUES (?, ?, ?)"
        const email = await emailValido(dados.email)
        
        if(email && senhaValida(dados.senha, dados.senha2) && nomeValido(dados.nome)){
            try {
                fazerConsulta(consulta, [dados.nome, dados.email, dados.senha], "Erro ao cadastrar :(")
                return {sucesso: "Conta criada com sucesso :)"}
                
            } catch (error) {
                return {erro: error}
            }
        }
        else{
            if(!senhaValida(dados.senha, dados.senha2))
                return {"erro": "Senha invalida"}
            else if(!nomeValido(dados.nome))
                return {"erro": "Nome invalido"}
            else if(!email)
                return {"erro": "Este email já foi cadastrado"}
            return {erro: email}
        } 
    }

    async noticias(){
        const consulta = "SELECT tb_noticias.titulo, tb_noticias.conteudo, tb_noticias.data, tb_categoria.categoria FROM tb_noticias JOIN tb_categoria ON tb_noticias.id_categoria=tb_categoria.id"

        try{
            const resultConsulta = await fazerConsulta(consulta, "Não foi possível carregar as noticias :(")

            resultConsulta.forEach(element => {
                element.data = dayjs(element.data).format("DD/MM/YYYY")
            })

            return resultConsulta

        }catch(error){
            return {erro: error}
        }
    }

    async noticias_filtro(filtro){
        const consultas = [
            "SELECT tb_noticias.titulo, tb_noticias.conteudo, tb_noticias.data, tb_categoria.categoria FROM tb_noticias JOIN tb_categoria ON tb_noticias.id_categoria=tb_categoria.id",
            "SELECT tb_noticias.titulo, tb_noticias.conteudo, tb_noticias.data, tb_categoria.categoria FROM tb_noticias JOIN tb_categoria ON tb_noticias.id_categoria=tb_categoria.id AND tb_categoria.categoria=?"
        ]

        try {
            if(filtro == "Todas"){
                const resultConsulta = await fazerConsulta(consultas[0], "Não foi possível carregar as noticias :(")

                resultConsulta.forEach(element => {
                    element.data = dayjs(element.data).format("DD/MM/YYYY")
                })
                
                return resultConsulta
            }
            
            const resultConsulta = await fazerConsulta(consultas[1], filtro, "Não foi possível carregar as noticias :(")

            resultConsulta.forEach(element => {
                element.data = dayjs(element.data).format("DD/MM/YYYY")
            })

            if(resultConsulta.length == 0)
                return {erro: "Selecione uma categoria válida :("}

            return resultConsulta
        } catch (error) {
            return {erro: error}
        }
    }

    async publicar(dados){
        const consultas = [
            "SELECT id FROM tb_categoria WHERE categoria=?",
            "INSERT INTO tb_noticias (titulo, id_categoria, conteudo) VALUES (?, ?, ?)", 
            "SELECT tb_noticias.titulo, tb_noticias.conteudo, tb_categoria.categoria FROM tb_noticias JOIN tb_categoria ON tb_noticias.titulo=? AND tb_noticias.conteudo=?"
        ]

        try {
            const id_categoria = await fazerConsulta(consultas[0], dados.categoria, "Erro ao publicar notícia :(")
            if(id_categoria.length == 0)
                return {invalida: "Categoria Inválida :("}
            
            try {
                const resultConsulta = await fazerConsulta(consultas[2], [dados.titulo, dados.descricao], "Erro ao publicar noticia :(")

                if(resultConsulta.length > 0)
                    return {existe: "Essa notícia já foi publicada :("}

                try {

                    fazerConsulta(consultas[1], [dados.titulo, id_categoria[0].id, dados.descricao], "Não foi possível publicar :(")
                    return {sucesso: "Noticia publicada com sucesso :)"}
                    
                } catch (error) {
                    return {erro: error}
                }

            } catch (error) {
                return {erro: error}
            }

        } catch (error) {
            return {erro: error}
        }
    }
}

async function emailValido(email){
    const consulta = "SELECT email FROM tb_usuarios WHERE email=?"
    const valido = email.toLowerCase()
    try {
        const resultConsulta = await fazerConsulta(consulta, valido, "Erro ao acessar email :(")
        if(resultConsulta.length == 0)
            return true
        return false
        
    } catch (error) {
        return {erro: error}
    }
}

function senhaValida(senha1, senha2) {
    const numeros = /\d/
    const simbolo = /[!@#$%^&*(),.?":{}|<>]/
    const maiuculas = /[A-Z]/
    const minusculas = /[a-z]/

    if(senha1 == senha2 && senha1.length >= 8){
        if(minusculas.test(senha1) || maiuculas.test(senha1) && numeros.test(senha1) || simbolo.test(senha1))
            return true
        return false
        
    }
    return false
}

function nomeValido(nome) {
    return true
}

export default new blogViews()
