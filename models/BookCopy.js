const { Schema, Types, model } = require('mongoose')

const BookCopy = model(
    'bookcopy',
    new Schema({
        book: [
            {
                type: Types.ObjectId,
                ref: 'book',
            },
        ],
        customer: {
            type: Types.ObjectId,
            ref: 'user',
        },
        status: {
            type: 'String',
            enum: [
                'created',
                'confirmed',
                'checkout',
                'canceled',
                'success',
                'timeout',
            ],
            default: 'created',
        },
        confirmDate: {
            type: String,
            default: 0
        },
        dueDate: Date,
        checkout: Date,
        price: Number,
        note: String,
    }),
    'bookcopy'
)

module.exports = BookCopy
