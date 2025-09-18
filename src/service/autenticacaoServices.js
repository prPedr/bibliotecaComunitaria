import jwt from "jsonwebtoken"

function tokenJwt(id) {
    return jwt.sign(
        {id},
        "04c987d1ace9b1aa7bbbff1e9f7142c027f82e4bd13f9200401dbd895ffdde39",
        {expiresIn: 86400}
    )
}

export {tokenJwt}