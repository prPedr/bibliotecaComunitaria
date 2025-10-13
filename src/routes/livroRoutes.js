import { Router } from "express"

import livroControllers from "../controller/livroControllers.js"
import {autenticacaoUsuarioMiddlewares} from "../middlewares/autenticacaoMiddlewares.js"
import {livroSchema} from "../schema/livroSchema.js"
import {validacao, validacaoLivroId} from "../middlewares/validacaoMiddlewares.js"

const router = Router()

router.get("/", livroControllers.procurarLivroControllers)

router.use(autenticacaoUsuarioMiddlewares)
router.post("/", validacao(livroSchema), livroControllers.criarLivroControllers)
router.get("/pesquisa", livroControllers.pesquisarTituloAutorControllers)
router.get("/:livroId", validacaoLivroId, livroControllers.procurarLivroIdControllers)
router.patch("/:livroId", validacaoLivroId, livroControllers.atualizarLivroControllers)
router.delete("/:livroId", validacaoLivroId, livroControllers.deletarLivroControllers)

export default router