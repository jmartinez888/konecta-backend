const { DecryptToken } = require("../core/JWT");

function validateToken(req, res, next) {
    const token = req.header("auth-token")
    if (!token) {
        res.json({ error: true, message: "You need a token" })
        return;
    }

    const verified = DecryptToken(token)
    console.log(verified)
    if (!verified) {
        res.json({ error: true, message: "Not authenticated" })
        return;
    }
    next();
}

module.exports = { validateToken }