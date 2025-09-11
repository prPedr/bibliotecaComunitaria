import usuarioRepositories from "../repositories/usuarioRepositories.js"
import bcrypt from "bcrypt"

async function criarUsuarioServices(novoUsuario) {
    const procurarUsuarioEmail = await usuarioRepositories.procurarUsuarioEmailRepositories(novoUsuario.email)
    if (procurarUsuarioEmail) {
        throw new Error("Usuario existente no sistema.")
    }

    const senhaHash = await bcrypt.hash(novoUsuario.senha, 10)
    const usuario = await usuarioRepositories.criarUsuarioRepositories({...novoUsuario, senha: senhaHash})
    if (!usuario) {
        throw new Error("Falha ao criar o usuario")
    }

    return usuario
}

export default {
    criarUsuarioServices,
}