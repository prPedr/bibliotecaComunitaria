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
    const livroId = request.params.livroId

    try {
        const livro = await livroServices.procurarLivroIdServices(livroId)
        return response.send(livro)
    } catch (err) {
        response.status(404).send(err.message)
    }
}

async function atualizarLivroControllers(request, response) {
    const atualizarLivro = request.body
    const livroId = request.params.livroId
    const usuarioId = request.usuarioId

    try {
        const responseLivro = await livroServices.atualizarLivroServices(atualizarLivro, livroId, usuarioId)
        response.send(responseLivro)
    } catch (err) {
        response.status(404).send(err.message)
    }
}

async function deletarLivroControllers(request, response) {
    const livroId = request.params.livroId
    const usuarioId = request.usuarioId

    try {
        const responseLivro = await livroServices.deletarLivroServices(livroId, usuarioId)
        response.send(responseLivro)
    } catch (err) {
        response.status(404).send(err.message)
    }
}

async function pesquisarTituloAutorControllers(request, response) {
    const {pesquisa} = request.query

    try {
        const livros = await livroServices.pesquisarTituloAutorServices(pesquisa)
        response.send(livros)
    } catch (err) {
        response.status(400).send(err.message)
    }
}

export default {
    criarLivroControllers,
    procurarLivroControllers,
    procurarLivroIdControllers,
    atualizarLivroControllers,
    deletarLivroControllers,
    pesquisarTituloAutorControllers,
}