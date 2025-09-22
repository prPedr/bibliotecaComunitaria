import livrosRepositories from "../repositories/livrosRepositories.js"

async function criarLivroServices(novoLivro) {
    const livro = await livrosRepositories.criarLivroRepositories(novoLivro)
    return livro
}

export default {
    criarLivroServices
}