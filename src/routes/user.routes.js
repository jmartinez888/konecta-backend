const { Router } = require("express")
const { body } = require('express-validator');

const { validateBody } = require("../middleware/validateBody");
const { saveUser, getUserById } = require("../service/UserServices");

const router = Router()

router.post('/',
    [
        body("name").isString(),
        validateBody
    ],
    async (req, res) => {
        const { name } = req.body
        const userId = await saveUser(name)
        if (!userId) {
            return res.send({ error: true })
        }

        const newUser = await getUserById(userId)
        if (!newUser) {
            return res.send({ error: true })
        }
        return res.json(newUser)
    })

module.exports = router