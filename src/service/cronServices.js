import cron from "node-cron"
import moment from "moment"
import emprestimoRepositories from "../repositories/emprestimoRepositories.js"
import livroRepositories from "../repositories/livrosRepositories.js"
import usuarioRepositories from "../repositories/usuarioRepositories.js"
import enviarEmail from "./emailService.js"

cron.schedule("49 * * * *", async () => {
    const emprestimos = await emprestimoRepositories.procurarEmprestimoRepositories()
    const hoje = moment().startOf("day")

    for (const emprestimo of emprestimos) {
        const dataEntrega = moment(emprestimo.dataEntrega).startOf("day")
        const lembreteDataEntrega = moment(dataEntrega).subtract(1, "days")

        const usuarioEmprestimo = await usuarioRepositories.procurarUsuarioIdReositories(emprestimo.usuarioId)
        const livroEmprestimo = await livroRepositories.procurarLivroIdRepositories(emprestimo.livroId)

        if (hoje.isSame(lembreteDataEntrega)) {
            enviarEmail(
                usuarioEmprestimo.nomeUsuario,
                usuarioEmprestimo.email,
                livroEmprestimo.titulo,
                emprestimo.dataEntrega
            )
        }
    }
})
