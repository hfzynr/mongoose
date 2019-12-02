const router = require("express").Router()

router.get("/", require("./controller").getAll)
router.get("/email/:email", require("./controller").getByEmail)
router.post("/", require("./controller").addOne)
router.delete("/:id", require("./controller").deleteOne)
router.put("/:id", require("./controller").updateOne)

module.exports = router