import livrosRepositories from "../repositories/livrosRepositories.js"

async function criarLivroServices(novoLivro, usuarioId) {
    const livro = await livrosRepositories.criarLivroRepositories(novoLivro, usuarioId)
    if (!livro) {
        throw new Error("Nao foi possivel cadastrar o livro")
    }
    return livro
}

async function procurarLivroServices() {
    const livro = await livrosRepositories.procurarLivrosRepositories()
    return livro
}

async function procurarLivroIdServices(livroId) {
    const livro = await livrosRepositories.procurarLivroIdRepositories(livroId)
    if (!livro) {
        throw new Error("Livro nao encontrato")
    }
    return livro
}

async function atualizarLivroServices(atualizaLirvo, livroId, usuarioId) {
    const livro = await livrosRepositories.atualizarLivrosRepositories(livroId)
    if (!livro) {
        throw new Error("Livro nao encontrato")
    }
    
    if (livro.usuarioId !== usuarioId) {
        throw new Error("Nao autorizado")
    }

    const response = await livrosRepositories.atualizarLivrosRepositories(atualizaLirvo, livroId)
    return response
}

async function deletarLivroServices(livroId, usuarioId) {
    const livro = await livrosRepositories.procurarLivroIdRepositories(livroId)
    if (!livro) {
        throw new Error("Livro nao encontrado")
    }

    if (livro.usuarioId !== usuarioId) {
        throw new Error("Nao autorizado")
    }

    const response = await livrosRepositories.deletarLivroRepositories(livroId)
    return response
}

export default {
    criarLivroServices,
    procurarLivroServices,
    procurarLivroIdServices,
    atualizarLivroServices,
    deletarLivroServices,
}