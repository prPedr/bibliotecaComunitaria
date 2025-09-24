import {z} from "zod"

const livroSchema = z.object({
    titulo: z.string().min(1, "E necessario ter um titulo"),
    autor: z.string().min(1, "E necessario ter um autor")
})

const livroIdSchema = z.object({
  livroId: z
    .string()
    .regex(/^\d+$/, "O id de usuário deve ser um número inteiro positivo")
    .transform((val) => Number(val))
})

export {
    livroSchema,
    livroIdSchema,
}