import usuarioRepositories from "../repositories/usuarioRepositories.js"

async function criaraUsuarioServices(novoUsuario) {
    const usuario = await usuarioRepositories.criarUsuarioRepositories(novoUsuario)
    return usuario
}

export default {
    criaraUsuarioServices
}