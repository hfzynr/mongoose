const {PORT, DATABASE_NAME, DATABASE_HOST} = require("./environtment")
const db = require("./connection")

module.exports = {
    PORT: PORT,
    DATABASE_NAME: DATABASE_NAME,
    DATABASE_HOST: DATABASE_HOST,
    db : db
}