const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send({message: "Welcome to paradise api"})
})

module.exports = router;