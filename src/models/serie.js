const mongoose = require('mongoose');
const CommentSchema = mongoose.Schema({
    comment: String
});

const SeriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enumValues: ['to-watch', 'watching', 'watched'],
    },
    comments: [CommentSchema]
});

const Serie = mongoose.model('Serie', SeriesSchema);

module.exports = Serie;