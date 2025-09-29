import emprestimoServices from "../service/emprestimoServices.js"

async function criarEmprestimoControllers(request, response) {
    const {livroId, dataEntrega} = request.body
    const usuarioId = request.usuarioId

    try {
        const emprestimo = await emprestimoServices.criarEmprestimosServices(usuarioId, livroId, dataEntrega)
        response.status(201).send({emprestimo})
    } catch (err) {
        response.status(400).send(err.message)
    }
}

async function procurarEmprestimoControllers(request, response) {
    try {
        const emprestimo = await emprestimoServices.procurarEmprestimoServices()
        response.send(emprestimo)
    } catch (err) {
        response.status(400).send(err.message)
    }
}

async function procurarEmprestimoIdControllers(request, response) {
    const emprestimoId = request.params.emprestimoId

    try {
        const emprestimo = await emprestimoServices.procurarEmprestimoIdServices(emprestimoId)
        response.send(emprestimo)
    } catch (err) {
        response.status(400).send(err.message)
    }
}

async function deletarEmprestimoControllers(request, response) {
    const emprestimoId = request.params.emprestimoId
    const usuarioId = request.usuarioId

    try {
        const emprestimo = await emprestimoServices.deletarEmprestimoServices(emprestimoId, usuarioId)
        response.send(emprestimo)
    } catch (err) {
        response.status(401).send(err.message)
    }
}

export default {
    criarEmprestimoControllers,
    procurarEmprestimoControllers,
    procurarEmprestimoIdControllers,
    deletarEmprestimoControllers,
}