import { Router } from "express"

import usuarioControllers from "../controller/usuarioControllers.js"
import { validacao, validacaoUsuarioId } from "../middlewares/validacaoMiddlewares.js"
import { usuarioSchema } from "../schema/usuarioSchema.js"
import {autenticacaoUsuarioMiddlewares} from "../middlewares/autenticacaoMiddlewares.js"

const router = Router()

router.post("/", validacao(usuarioSchema), usuarioControllers.criarUsuarioControllers)
router.post("/login", usuarioControllers.loginUsuarioControllers)

router.use(autenticacaoUsuarioMiddlewares)
router.get("/", usuarioControllers.listarTodosUsuariosControllers)
router.get("/:usuarioId", validacaoUsuarioId, usuarioControllers.procurarUsuarioIdControllers)
router.patch("/:usuarioId", validacaoUsuarioId, usuarioControllers.atualizarUsuarioControllers)
router.delete("/:usuarioId", validacaoUsuarioId, usuarioControllers.deletarUsuarioController)

export default router