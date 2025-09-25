import emprestimoRepositories from "../repositories/emprestimoRepositories.js"

async function criarEmprestimoServices(novoEmprestimo, usuarioId, livroId) {
    const emprestimo = await emprestimoRepositories.criarEmprestimoRepositories(novoEmprestimo, usuarioId, livroId)
    if (!emprestimo) {
        throw new Error("Nao foi possivel realizar o emprestimo")
    }
    return emprestimo
}

export default {
    criarEmprestimoServices,
}