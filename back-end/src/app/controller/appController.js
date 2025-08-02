import blogViews from "../views/appViews.js"

class blogController{
    async login(req, res) {
        const dados = req.body
        
        try {
            const loginResult = await blogViews.login(dados)
            if(loginResult.naoExiste)
                res.status(404).json(loginResult)
            else res.status(200).json(loginResult)
        } catch (error) {
            res.status(500).json(error)
        }

    }

    async cadastro(req, res) {
        const dados = req.body

        try {
            const cadastroResult = await blogViews.cadastro(dados)
            res.status(201).json(cadastroResult)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    
    async noticias(req, res){
        try {
            const noticiaResult = await blogViews.noticias()
            res.status(200).json(noticiaResult)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async noticias_filtro(req, res){
        const dados = req.params.filtro

        try {
            const filtroResult = await blogViews.noticias_filtro(dados)
            if(filtroResult.erro)
                res.status(500).json(filtroResult)
            else
                res.status(200).json(filtroResult)
        } catch (error) {
            res.status(500).json({erro: error})
        }
    }

    async publicar(req, res){
        const dados = req.body

        try {
            const resultPublicar = await blogViews.publicar(dados)
            if(resultPublicar.invalida)
                res.status(404).json(resultPublicar)
            else if(resultPublicar.erro)
                res.status(500).json(resultPublicar)
            else if(resultPublicar.existe)
                res.status(208).json(resultPublicar)
            else
                res.status(201).json(resultPublicar)

        } catch (error) {
            res.status(500).json({erro: error})
        }
    }

    async persquisar(req, res){
        const dados = req.body

        try {
            const resultPesquisa = await blogViews.pesquisar(dados)
            if(resultPesquisa.naoExiste)
                res.status(404).json(resultPesquisa)
            else
                res.status(200).json(resultPesquisa)
            
        } catch (error) {
            res.status(500).json({erro: error})
        }
    }
}
export default new blogController()
