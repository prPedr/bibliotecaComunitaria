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

function procurarUsuarioIdReositories(id) {
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

function atualizarUsuarioRepositories(id, usuario) {
    return new Promise((resolve, reject) => {
        const {nomeUsuario, email, senha, avatar} = usuario
        db.run(
            `UPDATE usuarios SET
                nomeUsuario = ?,
                email = ?,
                senha = ?,
                avatar = ?
            WHERE id = ?`, [nomeUsuario, email, senha, avatar, id],
            (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve({id, ...usuario})
                }
            }
        )
    })
}

function deletarUsuarioRepositories(id) {
    return new Promise((resolve, reject) => {
        db.run(
            `DELETE FROM usuarios
            WHERE id = ?`, [id],
            (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve({message: "Usuario deletado com sucesso", id})
                }
            }
        )
    })
}

export default {
    criarUsuarioRepositories,
    procurarUsuarioEmailRepositories,
    procurarUsuarioIdReositories,
    listarTodosUsuariosRepositories,
    atualizarUsuarioRepositories,
    deletarUsuarioRepositories
}