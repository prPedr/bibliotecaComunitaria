import nodemailer from "nodemailer"
import "dotenv/config.js"

const transporte = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.SENHA
    }
})

function enviarEmail(nomeUsuario, email, titulo, dataEntrega) {
    const opcoesEmail = {
        from: process.env.EMAIL,
        to: email,
        subject: "Lembre: A data de entrega do livro está próxima",
        html: `
            <div style="
                font-family: Arial, sans-serif;
                color: #333;
                font-size: 16px;
                line-height: 1.5;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                border: 1px solid #eee;
                border-radius: 8px;
                background-color: #fafafa;
            ">
                <h2 style="color:#2c3e50; font-size:22px; margin-top:0;">
                    📚 Lembrete da Biblioteca Comunitária
                </h2>

                <p>Olá, ${nomeUsuario}</p>

                <p>Este é um lembrete para a devolução do livro 
                    <strong>"${titulo}"</strong>.</p>

                <p>
                    <strong>Data de devolução:</strong> 
                    <span style="color:#e74c3c;">${dataEntrega}</span>
                </p>

                <p>Por favor, devolva o livro até a data indicada para evitar atrasos.</p>

                <p>Obrigado por utilizar nossa biblioteca!</p>

                <hr style="border:none; border-top:1px solid #ddd; margin:20px 0;">

                <p style="font-size:14px; color:#777; margin:0;">
                    Mensagem automática – não responda a este e-mail.
                </p>
            </div>
        `
    }

    transporte.sendMail(opcoesEmail, (err, info) => {
        if (err) {
            console.log("Erro ao enviar email:", err)
        } else {
            console.log("Email enviado:", info.response)
        }
    })
}

export default enviarEmail
