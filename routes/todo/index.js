const router = require("express").Router()

router.get("/", require("./controller").getAll)

module.exports = router