import express from "express"

const app = express()
app.use(express.json())

const usuarios = []

app.post("/usuarios", (request, response) => {
    const body = request.body
    usuarios.push(body)
    response.status(201).send("Usuario cadastrado com sucesso")
})

app.get("/usuarios", (request, response) => {
    response.json(usuarios)
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})