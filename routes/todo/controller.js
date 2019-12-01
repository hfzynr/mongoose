const {Todos} = require("../../models")

module.exports = {
    getAll: async(req, res) => {
        try {
            const result = await Todos.find({}).populate("users")
            res.status(200).json({message: "Show all todos", data: result})

        } catch (error) {
            console.log(error);
        }
    },
    addOne: async(req, res) => {
        try {
            const result = await Todos.insertOne(req.body).populate("users")
            res.status(200).json({message: "Data successfully added", data: result})
        } catch {
            console.log(error);
        }
    }
}