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

function criarUsuarioRepositories(novoUsuario) {
    return new Promise((resolve, reject) => {
        const {nomeUsuario, email, senha, avatar} = novoUsuario
        db.run(
            `INSERT INTO usuarios (nomeUsuario, email, senha, avatar)
            VALUES (?, ?, ?, ?)`, [nomeUsuario, email, senha, avatar],
            (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve({id: this.usuarioCadastrado, ...novoUsuario})
                }
            }
        )
    })
}

function procurarUsuarioEmailRepositories(email) {
    return new Promise((resolve, reject) => {
        db.get(
            `SELECT id, nomeUsuario, email, avatar
            FROM usuarios
            WHERE email = ?`, [email],
            (err, linhaUsuario) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(linhaUsuario)
                }
            }
        )
    })
}

function procurarUsuarioIdPeositories(id) {
    return new Promise((resolve, reject) => {
        db.get(
            `SELECT id, nomeUsuario, email, avatar
            FROM usuarios
            WHERE id = ?`, [id],
            (err, linhaUsuario) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(linhaUsuario)
                }
            }
        )
    })
}

function procurarUsuarioNomeUsuarioRepositories(nomeUsuario) {
    return new Promise((resolve, reject) => {
        db.get(
            `SELECT id, nomeUsuario, email, avatar
            FROM usuarios
            WHERE nomeUsuario = ?`, [nomeUsuario],
            (err, linhaUsuario) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(linhaUsuario)
                }
            }
        )
    })
}

function listarTodosUsuariosRepositories() {
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT id, nomeUsuario, email, avatar FROM usuarios`, [],
            (err, linhasUsuarios) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(linhasUsuarios)
                }
            }
        )
    })
}

export default {
    criarUsuarioRepositories,
    procurarUsuarioEmailRepositories,
    procurarUsuarioIdPeositories,
    procurarUsuarioNomeUsuarioRepositories,
    listarTodosUsuariosRepositories
}