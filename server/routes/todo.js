var express = require('express');
var router = express.Router();

const todoController = require('../controllers/todoController')

router
    .get('/', todoController.getAllTodos)

router
    .get('/:id', todoController.getSingleTodo)

module.exports = router;