const { Types } = require('mongoose')
const { model } = require('mongoose')
const { Schema } = require('mongoose')

const Book = model(
    'book',
    new Schema({
        title: String,
        banner: String,
        author: {
            type: Types.ObjectId,
            ref: 'author',
        },
        categories: {
            type: [Types.ObjectId],
            ref: 'category',
        },
        basePrice: { type: Number, default: 0 },
        publisher: {
            type: [Types.ObjectId],
            ref: 'publisher',
        },
        publishedDate: Date,
        info: String,
        available: { type: Boolean, default: true },
    }),
    'book'
)

module.exports = Book
