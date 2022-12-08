const { Query } = require("../core/MariaDBConnection")

const GetUsers = async () => {
    try {
        const result = await Query(`SELECT * FROM users`)
        return result
    } catch (error) {
        throw error
    }
}

const saveUser = async (name) => {
    try {
        const query = `INSERT INTO users(name) VALUES('${name}')`
        const result = await Query(query)
        const insertedId = parseInt(result?.insertId)
        return insertedId
    } catch (error) {
        return null
    }
}


const getUserById = async (id) => {
    try {
        const query = `SELECT * FROM users WHERE id = ${id}`
        const result = await Query(query)
        if (!result?.length) {
            return null
        }
        return result[0]
    } catch (error) {
        return null
    }
}


module.exports = {
    GetUsers,
    saveUser,
    getUserById
}