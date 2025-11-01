import { z } from "zod"

const emprestimoSchema = z.object({
  livroId: z.coerce.number().int().positive("O livro ID deve ser um número inteiro positivo"),

  dataEntrega: z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "A data deve estar no formato YYYY-MM-DD")
  .refine((val) => !isNaN(Date.parse(val)), {
    message: "A data fornecida não é válida"
  })
})

const emprestimoIdSchema = z.object({
  emprestimoId: z
    .string()
    .regex(/^\d+$/, "O emprestimo ID deve ser um número inteiro positivo")
    .transform((val) => Number(val))
})

export { emprestimoSchema, emprestimoIdSchema }
