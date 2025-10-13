import "dotenv/config"
import jwt from "jsonwebtoken"
import usuarioServices from "../service/usuarioServices.js"

function autenticacaoUsuarioMiddlewares(request, response, next) {
    const tokenHeaderUsuario = request.headers.authorization
    if (!tokenHeaderUsuario) {
        return response.status(401).send({message: "Token nao informado"})
    }

    const separarToken = tokenHeaderUsuario.split(" ")
    if (separarToken.length !== 2) {
        return response.status(401).send({message: "Tokem invalido"})
    }
    const [schema, tokenUsuarioJwt] = separarToken

    if (!/^Bearer$/i.test(schema)) {
        return response.status(401).send({message: "Token nao formado da maneira correta"})
    }

    jwt.verify(tokenUsuarioJwt, process.env.SECRET_JWT, async (err, validarToken) => {
        if (err) {
            return response.status(401).send({message: "Token invalido", error: err.message})
        }

        const usuario = await usuarioServices.procurarUsuarioIdServices(validarToken.id)
        if (!usuario || !usuario.id) {
            return response.status(401).send({message: "Token invalido"})
        }

        request.usuarioId = usuario.id
        return next()
    })
}

export {autenticacaoUsuarioMiddlewares}