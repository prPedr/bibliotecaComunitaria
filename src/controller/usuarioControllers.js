import usuarioServices from "../service/usuarioServices.js"

async function criarUsuarioControllers(request, response) {
    const novoUsuario = request.body

    try {
        const usuario = await usuarioServices.criarUsuarioServices(novoUsuario)
        response.status(201).send({usuario})
    } catch (err) {
        return response.status(400).send(err.message)
    }
}

export default {
    criarUsuarioControllers,
}