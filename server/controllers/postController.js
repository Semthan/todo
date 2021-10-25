const Post = require('../models/PostModel')

exports.getAllPosts = async (req, res) => {
    try {
        const AllPosts = await Post.find({})
        res.status(200).json(AllPosts)
    } catch (err) {
        console.error(err)
        res.status(500).send
    }
}

