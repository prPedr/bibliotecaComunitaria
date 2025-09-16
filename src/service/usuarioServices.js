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

async function procurarUsuarioId(id) {
    const usuario = await usuarioRepositories.procurarUsuarioIdPeositories(id)
    if (!usuario) {
        throw new Error("Id de usuario nao encontrado")
    }
    return usuario
}

async function procurarUsuarioNomeUsuario(nomeUsuario) {
    const usuario = await usuarioRepositories.procurarUsuarioNomeUsuarioRepositories(nomeUsuario)
    if (!usuario) {
        throw new Error("Nome de usuario nao encontrato")
    }
    return usuario
}

async function listarTodosUsuariosServices() {
    const usuarios = await usuarioRepositories.listarTodosUsuariosRepositories()
    return usuarios
}

export default {
    criarUsuarioServices,
    listarTodosUsuariosServices,
    procurarUsuarioId,
    procurarUsuarioNomeUsuario
}