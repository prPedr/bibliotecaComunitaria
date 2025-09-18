import usuarioRepositories from "../repositories/usuarioRepositories.js"
import {tokenJwt} from "./autenticacaoServices.js"
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
    const usuarioEmail = await usuarioRepositories.procurarUsuarioEmailRepositories(usuario.email)
    const tokeUsuario = tokenJwt(usuarioEmail.id)
    return tokeUsuario
}

async function procurarUsuarioIdServices(id) {
    const usuario = await usuarioRepositories.procurarUsuarioIdReositories(id)
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
    const usuario = await usuarioRepositories.procurarUsuarioIdReositories(usuarioId)
    if (!usuario) {
        throw new Error("Id de usuario nao encontrado")
    }

    if (novoUsuario.senha) {
        novoUsuario.senha = await bcrypt.hash(novoUsuario.senha, 10)
    }

    const usuarioAtualizado = await usuarioRepositories.atualizarUsuarioRepositories(usuarioId, novoUsuario)
    return usuarioAtualizado
}

async function deletarUsuarioServices(usuarioId) {
    const usuario = await usuarioRepositories.procurarUsuarioIdReositories(usuarioId)
    if (!usuario) {
        throw new Error("Id de usuario nao encontrado")
    }

    const message = await usuarioRepositories.deletarUsuarioRepositories(usuarioId)
    return message
}

export default {
    criarUsuarioServices,
    listarTodosUsuariosServices,
    procurarUsuarioIdServices,
    atualizarUsuarioServices,
    deletarUsuarioServices,
}