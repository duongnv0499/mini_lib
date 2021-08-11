const {Types} = require('mongoose')
const {model} = require('mongoose')
const {Schema} = require('mongoose')

const ddc = model(
    'ddc',
    new Schema({
        num: String,
        name: String,
        data: [
            {
                type: Types.ObjectId,
                ref: 'data'
            },
        ],
    }),
    'ddc'
)

module.exports = ddc
