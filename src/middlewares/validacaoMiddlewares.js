import { usuarioIdSchema } from "../schema/usuarioSchema.js"
import { livroIdSchema } from "../schema/livroSchema.js"
import { emprestimoIdSchema } from "../schema/emprestimoSchema.js"

const validacao = (schema) => (request, response, next) => {
    const resultado = schema.safeParse(request.body)

    if (!resultado.success) {
        return response.status(400).json({
            error: resultado.error.format()
        });
    }

    request.body = resultado.data;
    next();
};

const validacaoUsuarioId = (request, response, next) => {
    const resultado = usuarioIdSchema.safeParse({ usuarioId: request.params.usuarioId })

    if (!resultado.success) {
        return response.status(400).json({
            errors: resultado.error.issues.map(err => ({
                campo: err.path.join("."),
                mensagem: err.message
            }))
        })
    }

    request.params.usuarioId = resultado.data.usuarioId
    next()
}

const validacaoLivroId = (request, response, next) => {
    const resultadoLivro = livroIdSchema.safeParse({ livroId: request.params.livroId })

    if(!resultadoLivro.success) {
        return response.status(400).json({
            errors: resultadoLivro.error.issues.map(err => ({
                campo: err.path.join("."),
                mensagem: err.message
            }))
        })
    }

    request.params.livroId = resultadoLivro.data.livroId
    next()
}

const validacaoEmprestimoId = (request, response, next) => {
    const resultadoEmprestimo = emprestimoIdSchema.safeParse({ emprestimoId: request.params.emprestimoId })

    if (!resultadoEmprestimo.success) {
        return response.status(400).json({
            errors: resultadoEmprestimo.error.issues.map(err => ({
                campo: err.path.join("."),
                messagem: err.message
            }))
        })
    }

    request.params.emprestimoId = resultadoEmprestimo.data.emprestimoId
    next()
}

export {
    validacao,
    validacaoUsuarioId,
    validacaoLivroId,
    validacaoEmprestimoId,
}