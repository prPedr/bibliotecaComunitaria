import { Router } from "express"

import livroControllers from "../controller/livroControllers.js"
import {autenticacaoUsuarioMiddlewares} from "../middlewares/autenticacaoMiddlewares.js"
import {livroSchema} from "../schema/livroSchema.js"
import {validacao, validacaoLivroId} from "../middlewares/validacaoMiddlewares.js"

const router = Router()

router.get("/livros", livroControllers.procurarLivroControllers)

router.use(autenticacaoUsuarioMiddlewares)
router.post("/livros", validacao(livroSchema), livroControllers.criarLivroControllers)
router.get("/livros/pesquisa", livroControllers.pesquisarTituloAutorControllers)
router.get("/livros/:livroId", validacaoLivroId, livroControllers.procurarLivroIdControllers)
router.patch("/livros/:livroId", validacaoLivroId, livroControllers.atualizarLivroControllers)
router.delete("/livros/:livroId", validacaoLivroId, livroControllers.deletarLivroControllers)

export default router