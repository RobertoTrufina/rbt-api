const mongoose = require('../db/db')

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
})

const Post = mongoose.model('Post', PostSchema)

module.exports = Post