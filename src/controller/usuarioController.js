import usuarioServices from "../service/usuarioServices.js"

function criarUsuarioController(request, response) {
    const novoUsuario = request.body

    try {
        const usuario = usuarioServices.criarUsuarioService(novoUsuario)
        response.status(201).send({usuario})
    } catch (err) {
        return response.status(400).send(err.message)
    }
}

export default {
    criarUsuarioController,
}