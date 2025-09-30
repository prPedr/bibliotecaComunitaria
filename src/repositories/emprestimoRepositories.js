import db from "../config/dataBase.js"

db.run(
    `CREATE TABLE IF NOT EXISTS emprestimos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        usuarioId INTEGER,
        livroId INTEGER,
        dataEntrega DATE,
        FOREIGN KEY (usuarioId) REFERENCES usuarios(id),
        FOREIGN KEY (livroId) REFERENCES livros(id)
    )`
)

function criarEmprestimoRepositories(usuarioId, livroId, dataEntrega) {
    return new Promise((resolve, reject) => {
        db.run(
            `INSERT INTO emprestimos (usuarioId, livroId, dataEntrega)
            VALUES (?, ?, ?)`, [usuarioId, livroId, dataEntrega],
            function (err) {
                if (err) {
                    reject(err)
                } else {
                    resolve({id: this.emprestimoId, usuarioId, livroId})
                }
            }
        )
    })
}

function procurarEmprestimoRepositories() {
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT * FROM emprestimos`, [],
            (err, linhasEmprestimos) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(linhasEmprestimos)
                }
            }
        )
    })
}

function procurarEmprestimoIdRepositories(emprestimoId) {
    return new Promise((resolve, reject) => {
        db.get(
            `SELECT * FROM emprestimos WHERE id = ?`, [emprestimoId],
            (err, linhaEmprestimo) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(linhaEmprestimo)
                }
            }
        )
    })
}

function deletarEmprestimoRepositories(emprestimoId) {
    return new Promise((resolve, reject) => {
        db.run(
            `DELETE FROM emprestimos WHERE id = ?`, [emprestimoId],
            function (err) {
                if (err) {
                    reject(err)
                } else {
                    resolve({message: "Emprestimo deletado", emprestimoId})
                }
            }
        )
    })
}

export default {
    criarEmprestimoRepositories,
    procurarEmprestimoRepositories,
    procurarEmprestimoIdRepositories,
    deletarEmprestimoRepositories,
}