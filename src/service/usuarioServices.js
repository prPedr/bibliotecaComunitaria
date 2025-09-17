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

async function procurarUsuarioIdServices(id) {
    const usuario = await usuarioRepositories.procurarUsuarioIdPeositories(id)
    if (!usuario) {
        throw new Error("Id de usuario nao encontrado")
    }
    return usuario
}

async function listarTodosUsuariosServices() {
    const usuarios = await usuarioRepositories.listarTodosUsuariosRepositories()
    return usuarios
}

async function atualizarUsuarioServices(novoUsuario, usuarioId) {
    const usuario = await usuarioRepositories.procurarUsuarioIdPeositories(usuarioId)
    if (!usuario) {
        throw new Error("Id de usuario nao encontrado")
    }

    if (novoUsuario.senha) {
        novoUsuario.senha = await bcrypt.hash(novoUsuario.senha, 10)
    }

    const usuarioAtualizado = usuarioRepositories.atualizarUsuarioRepositories(usuarioId, novoUsuario)
    return usuarioAtualizado
}

export default {
    criarUsuarioServices,
    listarTodosUsuariosServices,
    procurarUsuarioIdServices,
    atualizarUsuarioServices,
}