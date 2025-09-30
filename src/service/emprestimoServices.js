import emprestimoRepositories from "../repositories/emprestimoRepositories.js"

async function criarEmprestimosServices(novoEmprestimo, usuarioId, livroId) {
    const emprestimo = await emprestimoRepositories.criarEmprestimoRepositories(novoEmprestimo, usuarioId, livroId)
    if (!emprestimo) {
        throw new Error("Nao foi possivel realizar o emprestimo")
    }

    return emprestimo
}

async function procurarEmprestimoServices() {
    const emprestimo = await emprestimoRepositories.procurarEmprestimoRepositories()
    return emprestimo
}

async function procurarEmprestimoIdServices(emprestimoId) {
    const emprestimo = await emprestimoRepositories.procurarEmprestimoIdRepositories(emprestimoId)
    if (!emprestimo) {
        throw new Error("Emprestimo nao encontrado")
    }

    return emprestimo
}

async function deletarEmprestimoServices(emprestimoId, usuarioId) {
    const emprestimo = await emprestimoRepositories.procurarEmprestimoIdRepositories(emprestimoId)
    if (!emprestimo) {
        throw new Error("Emprestimo nao encontrado")
    }

    if (emprestimo.usuarioId !== usuarioId) {
        throw new Error("Nao autorizado")
    }
    
    const deletarEmprestimo = await emprestimoRepositories.deletarEmprestimoRepositories(emprestimoId)
    return deletarEmprestimo
}

export default {
    criarEmprestimosServices,
    procurarEmprestimoServices,
    procurarEmprestimoIdServices,
    deletarEmprestimoServices,
}