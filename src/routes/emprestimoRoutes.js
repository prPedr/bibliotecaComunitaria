import { Router } from "express"

import emprestimoControllers from "../controller/emprestimoControllers.js"
import { validacao, validacaoEmprestimoId} from "../middlewares/validacaoMiddlewares.js"
import { emprestimoSchema } from  "../schema/emprestimoSchema.js"
import { autenticacaoUsuarioMiddlewares } from "../middlewares/autenticacaoMiddlewares.js"


const router = Router()

router.get("/emprestimos", emprestimoControllers.procurarEmprestimoControllers)

router.use(autenticacaoUsuarioMiddlewares)
router.post("/emprestimos", validacao(emprestimoSchema), emprestimoControllers.criarEmprestimoControllers)
router.get("/emprestimos/:emprestimoId", validacaoEmprestimoId, emprestimoControllers.procurarEmprestimoIdControllers)
router.delete("/emprestimos/:emprestimoId", validacaoEmprestimoId, emprestimoControllers.deletarEmprestimoControllers)

export default router