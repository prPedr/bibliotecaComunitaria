import db from "../config/dataBase.js"

db.run(
    `CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nomeUsuario TEXT UNIQUE NOT NULL,
        email TEXT UNIQUE NOT NULL,
        senha TEXT NOT NULL,
        avatar TEXT
    )`
)

function criarUsuarioRepositorie(novoUsuario) {
    return new Promise((resolve, reject) => {
        const {nomeUsuario, email, senha, avatar} = novoUsuario
        db.run(
            `INSERT INTO usuarios (nomeUsuario, email, senha, avatar)
            VALUES (?, ?, ?, ?)`, [nomeUsuario, email, senha, avatar],

            (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve("Usuario cadastrado.")
                }
            }
        )
    })
}

export default {
    criarUsuarioRepositorie,
}