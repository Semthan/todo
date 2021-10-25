var express = require('express');
var router = express.Router();

const postController = require('../controllers/postController')

router
    .get('/', postController.getAllPosts)

router
    .get('/:id', postController.getSinglePost)

module.exports = router;