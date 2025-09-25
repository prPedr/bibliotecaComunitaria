import emprestimoControllers from "../controller/emprestimoControllers.js"

import { Router } from "express"

const router = Router()

router.post("/emprestimo", emprestimoControllers.criarEmprestimoControllers)

export default router