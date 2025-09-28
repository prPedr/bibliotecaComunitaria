import { Router } from "express"

import emprestimoControllers from "../controller/emprestimoControllers.js"
import { validacao } from "../middlewares/validacaoMiddlewares.js"
import { emprestimoSchema } from  "../schema/emprestimoSchema.js"

const router = Router()

router.post("/emprestimos", validacao(emprestimoSchema), emprestimoControllers.criarEmprestimoControllers)
router.get("/emprestimos", emprestimoControllers.procurarEmprestimoControllers)

export default router