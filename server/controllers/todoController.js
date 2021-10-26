const Todo = require('../models/TodoModel')

exports.getAllTodos = async (req, res) => {
    try {
        const allTodo = await Todo.find({})
        res.status(200).json(allTodo)
    } catch (err) {
        console.error(err)
        res.status(500).send
    }
}

exports.getSingleTodo = async (req, res) => {
    try {
        const todoId = req.params.id

        const todo = await Todo.findById(todoId)
        res.status(200).json(todo)
    } catch (err) {
        console.error(err)
        res.status(500).send
    }
}

