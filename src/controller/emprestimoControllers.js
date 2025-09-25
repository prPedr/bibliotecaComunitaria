import emprestimoServices from "../service/emprestimoServices.js"

async function criarEmprestimoControllers(request, response) {
    const novoEmprestimo = request.body
    const usuarioId = request.usuarioId
    const livroId = request.livroId

    try {
        const emprestimo = await emprestimoServices.criarEmprestimoControllers(novoEmprestimo, usuarioId, livroId)
        response.status(200).send(emprestimo)
    } catch (err) {
        response.status(400).send(err.message)
    }
}

export default {
    criarEmprestimoControllers,

}