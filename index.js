import express from "express"
import "dotenv/config"

import usuarioRoutes from "./src/routes/usuarioRoutes.js"
import livroRoutes from "./src/routes/livroRoutes.js"
import emprestimoRoutes from "./src/routes/livroRoutes.js"

const app = express()

const porta = process.env.PORTA || 3000

app.use(express.json())
app.use(usuarioRoutes)
app.use(livroRoutes)
app.use(emprestimoRoutes)

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})