import db from "../config/dataBase.js"

db.run(
    `CREATE TABLE IF NOT EXISTS livros (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT NOT NULL,
        autor TEXT NOT NULL,
        usuarioId INTEGER,
        FOREIGN KEY (usuarioId) REFERENCES usuarios(id)
    )`
)

function criarLivroRepositories(novoLivro, usuarioId) {
    return new Promise((resolve, reject) => {
        const {titulo, autor} = novoLivro
        db.run(
            `INSERT INTO livros (titulo, autor, usuarioId)
            VALUES (?, ?, ?)`, [titulo, autor, usuarioId],
            (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve({id: this.proximoId, ...novoLivro})
                }
            }
        )
    })
}

function procurarLivrosRepositories() {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM livros`, [], (err, linhaLivro) => {
            if (err) {
                reject(err)
            } else {
                resolve(linhaLivro)
            }
        })
    })
}

export default {
    criarLivroRepositories,
    procurarLivrosRepositories,
}