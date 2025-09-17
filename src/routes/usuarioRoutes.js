import { Router } from "express"

import usuarioControllers from "../controller/usuarioControllers.js"
import { validacao, validacaoUsuarioId } from "../middlewares/validacaoMiddlewares.js"
import { usuarioSchema } from "../schema/usuarioSchema.js"

const router = Router()

router.post("/usuarios", validacao(usuarioSchema), usuarioControllers.criarUsuarioControllers)
router.get("/usuarios", usuarioControllers.listarTodosUsuariosControllers)
router.get("/usuarios/:usuarioId", validacaoUsuarioId, usuarioControllers.procurarUsuarioIdControllers)
router.put("/usuarios/:usuarioId", validacaoUsuarioId, validacao(usuarioSchema), usuarioControllers.atualizarUsuarioControllers)
router.delete("/usuarios/:usuarioId", validacaoUsuarioId, usuarioControllers.deletarUsuarioController)

export default router