import usuarioRepositories from "../repositories/usuarioRepositories.js"

async function criarUsuarioService(novoUsuario) {
    const usuario = await usuarioRepositories.criarUsuarioRepositorie(novoUsuario)
    return usuario
}

export default {
    criarUsuarioService,
}