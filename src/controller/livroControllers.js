import livroServices from "../service/livroServices.js"

async function criarLivroControllers(request, response) {
    const novoLivro = request.body
    const usuarioId = request.usuarioId

    try {
        const livro = await livroServices.criarLivroServices(novoLivro, usuarioId)
        response.status(201).send({livro})
    } catch (err) {
        response.status(400).send(err.message)
    }
}

async function procurarLivroControllers(request, response) {
    try {
        const livros = await livroServices.procurarLivroServices()
        response.send(livros)
    } catch (err) {
        response.status(404).send(err.message)
    }
}

export default {
    criarLivroControllers,
    procurarLivroControllers
}