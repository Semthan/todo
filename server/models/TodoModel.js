const mongoose = require('mongoose')

const { Schema } = mongoose;

const todoSchema = new Schema(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        //date: { type: new Date("<YYYY-mm-dd>"), require: true }
    },
    {
        timestamps: true,
    },
)

const Todo = mongoose.model('Todo', todoSchema)
module.exports = Todo