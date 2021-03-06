var express = require('express');
var router = express.Router();

const todoController = require('../controllers/todoController')

router
    .get('/', todoController.getAllTodos)
    .post('/add', todoController.addTodo)


router
    .get('/:id', todoController.getSingleTodo)
    .post('/:id', todoController.editTodo)
    .delete('/:id', todoController.deleteSingleTodo)

module.exports = router;