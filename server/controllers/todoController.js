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

exports.addTodo = async (req, res) => {
    try {
        const newTodo = {
            title: req.body.title,
            content: req.body.content
        }

        const todo = await new Todo(newTodo)
        todo.save()
        res.status(200).json(todo)
    } catch (err) {
        console.error(err)
        res.status(500).send
    }
}

exports.deleteSingleTodo = async (req, res) => {
    try {

        const todoId = req.params.id
        await Todo.findByIdAndDelete(todoId)
        const allTodo = await Todo.find({})
        res.status(200).json(allTodo)
    } catch (err) {
        console.error(err)
        res.status(500).send()
    }
}

exports.editTodo = async (req, res) => {
    try {

        const { id } = req.params

        const newTodo = {
            title: req.body.title,
            content: req.body.content
        }

        const filter = { _id: id }

        await Todo.findOneAndUpdate(filter, newTodo, { new: true })

        res.status(200).json('Updated')
    } catch (err) {
        console.error(err)
        res.status(500).send()
    }
}


