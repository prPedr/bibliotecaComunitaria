import express from "express"
import "dotenv/config"

import {routers} from "./src/routes/index.js"
import "./src/service/cronServices.js"

const app = express()

const porta = process.env.PORTA || 3000

app.use(express.json())
app.use(routers)

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})