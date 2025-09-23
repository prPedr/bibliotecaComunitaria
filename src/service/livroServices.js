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

export default {
    criarLivroServices,
    procurarLivroServices,
}