const {Types} = require('mongoose')
const {model} = require('mongoose')
const {Schema} = require('mongoose')

const Book = model(
    'book',
    new Schema({
        title: String,
        author: [String],
        categories: [String],
        basePrice: {type: Number, default: 0},
        publisher: String,
        addDate: String,
        info: String,
        quantity: {type: Number, default: 0},
        image: String,
    }),
    'book'
)

module.exports = Book
