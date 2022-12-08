const jwt = require('jsonwebtoken');

const GetToken = (id) => {
    const seed = process.env.TOKEN_SECRET
    const token = jwt.sign({
        id
    }, seed)
    return token
}

const DecryptToken = (token) => {
    try {
        const seed = process.env.TOKEN_SECRET
        const verified = jwt.verify(token, seed)
        return verified
    } catch (e) { return null }
}

module.exports = {
    GetToken,
    DecryptToken
}