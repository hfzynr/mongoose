const {PORT,
    DATABASE_NAME, 
    DATABASE_HOST_LIVE
} = require("./environtment")
const db = require("./connection")

module.exports = {
    PORT: PORT,
    DATABASE_NAME: DATABASE_NAME,
    DATABASE_HOST_LIVE: DATABASE_HOST_LIVE,
    db : db
}