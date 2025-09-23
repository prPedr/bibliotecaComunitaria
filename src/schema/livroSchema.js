import {z} from "zod"

const livroSchema = z.object({
    titulo: z.string().min(1, "E necessario ter um titulo"),
    autor: z.string().min(1, "E necessario ter um autor")
})

export {livroSchema}