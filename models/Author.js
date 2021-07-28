const { Schema, Types, model } = require('mongoose')

const Author = model(
    'author',
    new Schema({
        name: String,
        dob: Date,
        info: String,
    }),
    'author'
)

module.exports = Author
