const {Todos} = require("../../models")

module.exports = {
    getAll: async(req, res) => {
        try {

            const result = await Todos.find({}).populate("users")

            res.status(200).json({message: "Show all todos", data: result})

        } catch (error) {
            console.log(error);
        }
    }
}