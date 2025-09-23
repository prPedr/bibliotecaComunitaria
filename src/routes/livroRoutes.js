import { Router } from "express"

import livroControllers from "../controller/livroControllers.js"
import {autenticacaoUsuarioMiddlewares} from "../middlewares/autenticacaoMiddlewares.js"
import {livroSchema} from "../schema/livroSchema.js"
import {validacao} from "../middlewares/validacaoMiddlewares.js"

const router = Router()

router.get("/livros", livroControllers.procurarLivroControllers)

router.use(autenticacaoUsuarioMiddlewares)
router.post("/livros", validacao(livroSchema), livroControllers.criarLivroControllers)

export default router