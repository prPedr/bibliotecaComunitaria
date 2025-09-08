import express from "express"

const app = express()

app.get("/usuarios", (request, response) => {
    response.send("Hello World")
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})

it config --global user.email "you@example.com"
  git config --global user.name "Your Name"