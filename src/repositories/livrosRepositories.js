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

function procurarLivroIdRepositories(livroId) {
    return new Promise((resolve, reject) => {
        db.get(
            `SELECT * FROM livros WHERE id = ?`, [livroId], (err, linhaLivro) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(linhaLivro)
                }
            }
        )
    })
}

function atualizarLivrosRepositories(atualizarLivro, livroId) {
    return new Promise((resolve, reject) => {
        const filtros = ["titulo", "autor", "usuarioId"]
        let query = "UPDATE livros SET"
        const valores = []

        filtros.forEach(filtro => {
            if (atualizarLivro[filtro] !== undefined) {
                query += ` ${filtro} = ?,`
                valores.push(atualizarLivro[filtro])
            }
        })

        if (valores.length === 0) {
            return reject(new Error("Nenhum campo válido para atualizar"))
        }

        query = query.slice(0, -1)

        query += " WHERE id = ?"
        valores.push(livroId)

        db.run(query, valores, function(err) {
            if (err) {
                reject(err)
            } else {
                resolve({ id: livroId, ...atualizarLivro })
            }
        })
    })
}


function deletarLivroRepositories(livroId) {
    return new Promise((resolve, reject) => {
        db.run(
            `DELETE FROM livros WHERE id = ?`, [livroId], function (err) {
                if (err) {
                    reject(err)
                } else {
                    resolve({message: "Livro deletado", livroId})
                }
            }
        )
    })
}

export default {
    criarLivroRepositories,
    procurarLivrosRepositories,
    procurarLivroIdRepositories,
    atualizarLivrosRepositories,
    deletarLivroRepositories,
}