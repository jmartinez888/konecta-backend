const pool = require("../config/db")

const Query = async (query) => {
    let conn
    try {
        conn = await pool.getConnection()
        const result = await conn.query(query)
        return result
    } catch (error) {
        throw error
    } finally {
        if (conn) {
            conn.release()
        }
    }
}

module.exports = {
    Query
}