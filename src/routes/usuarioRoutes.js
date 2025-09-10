import { Router } from "express";

import usuarioControllers from "../controller/usuarioControllers.js"

const router = Router()

router.post("/usuarios", usuarioControllers.criarUsuarioControllers)

export default router