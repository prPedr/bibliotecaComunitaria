import { Router } from "express"

import usuarioControllers from "../controller/usuarioControllers.js"
import { validacao } from "../middlewares/validacaoMiddlewares.js"
import { usuarioSchema } from "../schema/usuarioSchema.js"

const router = Router()

router.post("/usuarios", validacao(usuarioSchema), usuarioControllers.criarUsuarioControllers)
router.get("/usuarios", usuarioControllers.listarTodosUsuariosControllers)
router.get("/usuarios/:id", usuarioControllers.procurarUsuarioIdControllers)
router.put("/usuarios/:id", validacao(usuarioSchema), usuarioControllers.atualizarUsuarioControllers)

export default router