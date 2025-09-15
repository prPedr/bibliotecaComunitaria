import { z } from "zod";

const validacaoSchema = z.object({
  nomeUsuario: z.string
    .min(5, "O nome de usuário deve conter pelo menos 5 caracteres"),

  email: z.string
    .email("Email inválido"),

  senha: z.string
    .min(6, "A senha deve conter pelo menos 6 caracteres")
    .regex(
      /^(?!.*\s)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}\[\]|\\:;"'<>,.?/~`]).{6,}$/,
      "Senha fraca: use letras maiúsculas, minúsculas, números e caracteres especiais; sem espaços"
    ),

  avatar: z.string.url("URL inválida"),
});

export { validacaoSchema };
