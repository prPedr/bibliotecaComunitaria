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

export default {
    criarEmprestimoControllers,
    procurarEmprestimoControllers
}