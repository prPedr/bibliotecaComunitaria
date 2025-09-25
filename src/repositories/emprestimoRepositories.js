import db from "../config/dataBase.js"

db.run(
    `CREATE TABLE IF NOT EXISTS emprestimos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        usuarioId INTEGER,
        livroId INTEGER,
        dataEntrega DATE,
        FOREIGN KEY (usuarioId) REFERENCES usuario(id),
        FOREIGN KEY (livroId) REFERENCES (livros(id))
    )`
)

function criarEmprestimoRepositories(novoEmprestimo, usuarioId, livroId) {
    return new Promise((resolve, reject) => {
        const {dataEntrega} = novoEmprestimo
        db.run(
            `INSERT INTO emprestimos (usuarioId, livroId, dataEntreega)
            VALUES (?, ?, ?)`, [usuarioId, livroId, dataEntrega],
            (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve({id: this.proximoEmprestimo, ...novoEmprestimo})
                }
            }
        )
    })
}

export default {
    criarEmprestimoRepositories,
}