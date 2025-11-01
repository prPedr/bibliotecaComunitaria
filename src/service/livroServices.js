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

async function atualizarLivroServices(atualizaLivro, livroId, usuarioId) {
    const livro = await livrosRepositories.procurarLivroIdRepositories(livroId)
    if (!livro) {
        throw new Error("Livro nao encontrado")
    }

    if (livro.usuarioId !== usuarioId) {
        throw new Error("Nao autorizado")
    }

    const response = await livrosRepositories.atualizarLivrosRepositories(atualizaLivro, livroId)
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

async function pesquisarTituloAutorServices(pesquisa) {
    if (!pesquisa) {
        return await livrosRepositories.procurarLivroIdRepositories(livroId)
    }

    const livros = await livrosRepositories.pesquisarTituloAutorRepositories(pesquisa)
    return livros
}

export default {
    criarLivroServices,
    procurarLivroServices,
    procurarLivroIdServices,
    atualizarLivroServices,
    deletarLivroServices,
    pesquisarTituloAutorServices,
}