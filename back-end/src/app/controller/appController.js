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
            res.json(cadastroResult)
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
            res.status(200).json(filtroResult)
        } catch (error) {
            res.status(500).json({erro: error})
        }
    }
}
export default new blogController()
