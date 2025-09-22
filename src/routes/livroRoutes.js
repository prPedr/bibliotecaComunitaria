import { Router } from "express"

import livroControllers from "../controller/livroControllers.js"

const router = Router()

router.post("/livros", livroControllers.criarLivroControllers)

export default router