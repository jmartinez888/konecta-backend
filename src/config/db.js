
const mariadb = require('mariadb')

const pool = mariadb.createPool({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'password',
    database: 'elearning'
})

module.exports = pool