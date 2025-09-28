import emprestimoRepositories from "../repositories/emprestimoRepositories.js"

async function criarEmprestimosServices(novoEmprestimo, usuarioId, livroId) {
    const emprestimo = emprestimoRepositories.criarEmprestimoRepositories(novoEmprestimo, usuarioId, livroId)
    if (!emprestimo) {
        throw new Error("Nao foi possivel realizar o emprestimo")
    }
    return emprestimo
}

async function procurarEmprestimoServices() {
    const emprestimo = emprestimoRepositories.procurarEmprestimoRepositories()
    return emprestimo
}

export default {
    criarEmprestimosServices,
    procurarEmprestimoServices,
}