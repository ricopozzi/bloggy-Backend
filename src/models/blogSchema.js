const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate')

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
        required: false,
    },
    dateposted:{
        type: Date,
        default: Date.now,
    }
});
blogSchema.plugin(mongoosePaginate)
mongoose.model('Blog', blogSchema);
