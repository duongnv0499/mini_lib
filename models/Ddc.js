const {Types} = require('mongoose')
const {model} = require('mongoose')
const {Schema} = require('mongoose')

const Book = model(
    'ddc',
    new Schema({
        num: String,
        name: String,
        data: [
            {
                type: Types.ObjectId,
            },
        ],
    }),
    'ddc'
)

module.exports = Book
