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

async function procurarLivroIdControllers(request, response) {
    const livroId = request.params.id

    try {
        const livro = livroServices.procurarLivroIdServices(livroId)
        return response.send(livro)
    } catch (err) {
        response.status(404).send(err.message)
    }
}

async function atualizarLivroControllers(request, response) {
    const atualizarLirvo = request.body
    const livroId = request.params.id
    const usuarioId = request.usuarioId

    try {
        const responseLivro = await livroServices.atualizarLivroServices(atualizarLirvo, livroId, usuarioId)
        response.send(responseLivro)
    } catch (err) {
        response.status(404).send(err.message)
    }
}

async function deletarUsuarioControllers(request, response) {
    const livroId = request.params.id
    const usuarioId = request.usuarioId

    try {
        const responseLivro = await livroServices.deletarLivroServices(livroId, usuarioId)
        response.send(responseLivro)
    } catch (err) {
        response.status(404).send(err.message)
    }
}

export default {
    criarLivroControllers,
    procurarLivroControllers,
    procurarLivroIdControllers,
    atualizarLivroControllers,
    deletarUsuarioControllers,
}