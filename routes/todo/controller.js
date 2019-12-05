const {Todos} = require("../../models")
const objectId = require("mongodb").ObjectId

module.exports = {
    getAll: async(req, res) => {
        try {
            const result = await Todos.find({}).populate("users")
            res.status(200).json({message: "Show all todos", data: result})

        } catch (error) {
            console.log(error);
        }
    },
    getByEmail: async(req, res) => {
        try {
            const result = await Todos.find({ email: req.params.email }).populate("users")

            res.status(200).json({message: "Show all todos by id", data: result})
        } catch (error) {
            console.log(error);
        }
    },
    addOne: async(req, res) => {
        try {
            const result = await Todos.create(req.body)
            
            res.status(201).json({message: "Data successfully added", data: result})
        } catch (error) {
            console.log(error);
        }
    },
    deleteOne: async(req, res) => {
        const { id } = req.params;
        try {
            const result = await Todos.remove({ _id: objectId(id) })

            res.status(200).json({message: `Data succesfully delete with id ${id}`, data: result})
        } catch (error) {
            console.log(error);
        }
    },
    updateOne: async(req, res) => {
        const {id} = req.params;
        try {
            const result = await Todos.update({ _id : objectId(id) }, {$set : (req.body)})

            res.status(200).json({message: `Data succesfully update with id ${id}`, data: result})
        } catch (error) {
            console.log(error);
        }
    }
}