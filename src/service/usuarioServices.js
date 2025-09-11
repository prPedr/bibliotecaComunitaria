import usuarioRepositories from "../repositories/usuarioRepositories.js"

async function criarUsuarioServices(novoUsuario) {
    const procurarUsuarioEmail = await usuarioRepositories.procurarUsuarioEmailRepositories(novoUsuario.email)
    if (procurarUsuarioEmail) {
        throw new Error("Usuario ja existe no sistema, favor conferir e tentar novamente")
    }
    const usuario = await usuarioRepositories.criarUsuarioRepositories(novoUsuario)
    return usuario
}

export default {
    criarUsuarioServices,
}