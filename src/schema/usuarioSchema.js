import { z} from "zod"

const validacaoSchema = z.object({
    nomeUsuario: z.string().min(5, "O node de usuario deve conter pelo menos 5 caracteres"),
    email: z.string.email("Email invalido"),
    senha: z.stringFormat.min(6, "A senha deve conter pelo menos 6 caracteres"),
    avatar: z.string.url("URL invalida")
})

export {validacaoSchema}