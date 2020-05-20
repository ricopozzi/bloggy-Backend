const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
    },
    dateposted:{
        type: Date,
        default: Date.now,
    }
});

const blog = mongoose.model('Blog', blogSchema);
