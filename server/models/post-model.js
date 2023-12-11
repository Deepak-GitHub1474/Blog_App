const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title: String,
    description: String,
    file: String,
    blog: String,
    email: String,
    username: String,
})

const PostModel = mongoose.model('posts', PostSchema)

module.exports = PostModel;