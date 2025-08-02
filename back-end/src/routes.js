import Router from "express"
import blogController from "./app/controller/appController.js"

const router = Router()

router.post("/login", blogController.login)
router.post("/cadastro", blogController.cadastro)
router.get("/noticias", blogController.noticias)
router.get("/noticias_filtro/:filtro", blogController.noticias_filtro)
router.post("/publicar", blogController.publicar)
router.post("/pesquisar", blogController.persquisar)


export default router
