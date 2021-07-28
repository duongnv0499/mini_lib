const { Schema, Types, model } = require('mongoose')

const Category = model(
    'category',
    new Schema({
        name: String,
        parent: {
            type: Types.ObjectId,
            ref: 'author',
        },
    }),
    'category'
)

module.exports = Category
