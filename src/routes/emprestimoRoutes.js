import { Router } from "express"

import emprestimoControllers from "../controller/emprestimoControllers.js"
import { validacao, validacaoEmprestimoId} from "../middlewares/validacaoMiddlewares.js"
import { emprestimoSchema } from  "../schema/emprestimoSchema.js"
import { autenticacaoUsuarioMiddlewares } from "../middlewares/autenticacaoMiddlewares.js"


const router = Router()

router.get("/", emprestimoControllers.procurarEmprestimoControllers)

router.use(autenticacaoUsuarioMiddlewares)
router.post("/", validacao(emprestimoSchema), emprestimoControllers.criarEmprestimoControllers)
router.get("/:emprestimoId", validacaoEmprestimoId, emprestimoControllers.procurarEmprestimoIdControllers)
router.delete("/:emprestimoId", validacaoEmprestimoId, emprestimoControllers.deletarEmprestimoControllers)

export default router