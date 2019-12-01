const mongoose = require("mongoose")
const Schema = mongoose.Schema

const todoSchema = new Schema ({
    todo: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    }
});

const Todos = mongoose.model("todo-data", todoSchema)
module.exports = Todos;