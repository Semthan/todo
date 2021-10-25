const Post = require('../models/PostModel')

exports.getAllPosts = async (req, res) => {
    try {
        const allPosts = await Post.find({})
        res.status(200).json(allPosts)
    } catch (err) {
        console.error(err)
        res.status(500).send
    }
}

exports.getSinglePost = async (req, res) => {
    try {
        const postId = req.params.id

        const post = await Post.findById(postId)
        res.status(200).json(post)
    } catch (err) {
        console.error(err)
        res.status(500).send
    }
}

