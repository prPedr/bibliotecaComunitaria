import jwt from "jsonwebtoken"
import "dotenv/config"
import usuarioRepositorie from "../repositories/usuarioRepositories.js"
import bcrypt from "bcrypt"

function tokenJwt(id) {
    return jwt.sign(
        {id},
        process.env.SECRET_JWT,
        {expiresIn: 86400}
    )
}

async function loginService(email, senha) {
    const usuario = await usuarioRepositorie.procurarUsuarioEmailRepositories(email)
    if (!usuario) {
        throw new Error("Usuario Invalido")
    }

    const validarSenha = await bcrypt.compare(senha, usuario.senha)
    if (!validarSenha) {
        throw new Error("Usuario invalido")
    }

    return tokenJwt(usuario.id)
}

export {tokenJwt, loginService}
