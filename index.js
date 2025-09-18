import express from "express"
import "dotenv/config"

import usuarioRoutes from "./src/routes/usuarioRoutes.js"

const app = express()

const porta = process.env.PORTA || 3000

app.use(express.json())
app.use(usuarioRoutes)

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})