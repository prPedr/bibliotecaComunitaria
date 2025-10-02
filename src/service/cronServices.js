import cron from "node-cron"
import moment from "moment"
import emprestimoRepositories from "../repositories/emprestimoRepositories.js"
import enviarEmail from "./emailService.js"

cron.schedule("49 * * * *", async () => {
    const emprestimos = await emprestimoRepositories.procurarEmprestimoRepositories()
    const hoje = moment().startOf("day")

    for (const emprestimo of emprestimos) {
        const dataEntrega = moment(emprestimo.dataEntrega).startOf("day")
        const lembreteDataEntrega = moment(dataEntrega).subtract(1, "days")

        if (hoje.isSame(lembreteDataEntrega)) {
            enviarEmail(
                emprestimo.nomeUsuario,
                emprestimo.email,
                emprestimo.titulo,
                emprestimo.dataEntrega
            )
        }
    }
})
