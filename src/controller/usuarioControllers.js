import usuarioServices from "../service/usuarioServices.js"
import {loginService} from "../service/autenticacaoServices.js"

async function criarUsuarioControllers(request, response) {
    const novoUsuario = request.body

    try {
        const tokenUsuario = await usuarioServices.criarUsuarioServices(novoUsuario)
        response.status(201).send({tokenUsuario})
    } catch (err) {
        response.status(400).send(err.message)
    }
}

async function loginUsuarioControllers(request, response) {
    const {email, senha} = request.body

    try {
        const tokenUsuario = await loginService(email, senha)
        response.send({tokenUsuario})
    } catch (err) {
        response.status(400).send(err.message)
    }
}

async function listarTodosUsuariosControllers(request, response) {
    try {
        const usuarios = await usuarioServices.listarTodosUsuariosServices()
        response.send({usuarios}) 
    } catch (err) {
        response.status(404).send(err.message)
    }
}

async function procurarUsuarioIdControllers(request, response) {
    const {usuarioId} = request.params

    try {
        const usuario = await usuarioServices.procurarUsuarioIdServices(usuarioId)
        response.send({usuario})
    } catch (err) {
        response.status(404).send(err.message)
    }
}

async function atualizarUsuarioControllers(request, response) {
    const {usuarioId} = request.params
    const novoUsuario = request.body

    try {
        const usuario = await usuarioServices.atualizarUsuarioServices(novoUsuario, usuarioId)
        response.send({usuario})
    } catch (err) {
        response.status(404).send(err.message)
    }
}

async function deletarUsuarioController(request, response) {
    const {usuarioId} = request.params

    try {
        const usuario = await usuarioServices.deletarUsuarioServices(usuarioId)
        response.send({usuario})
    } catch (err) {
        response.status(404).send(err.message)
    }
}

export default {
    criarUsuarioControllers,
    loginUsuarioControllers,
    listarTodosUsuariosControllers,
    procurarUsuarioIdControllers,
    atualizarUsuarioControllers,
    deletarUsuarioController,
}