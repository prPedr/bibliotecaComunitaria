import { Router } from "express"

import usuarioRouter from "./usuarioRoutes.js"
import livroRouter from "./livroRoutes.js"
import emprestimoRouter from "./emprestimoRoutes.js"

const routers = Router()

routers.use("/usuarios", usuarioRouter)
routers.use("/livros", livroRouter)
routers.use("/emprestimos", emprestimoRouter)

export {routers}