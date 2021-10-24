const mongoose = require('mongoose')

const { Schema } = mongoose;

const postSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        date: { type: new Date("<YYYY-mm-dd>"), require: true }
    },
    {
        timestamps: true,
    },
)

const Post = mongoose.model('Post', postSchema)
module.exports = Post