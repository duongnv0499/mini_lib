const { Schema, Types, model } = require('mongoose')

const Publisher = model(
    'publisher',
    new Schema({
        name: String,
        avatar: String,
    }),
    'publisher'
)

module.exports = Publisher
