const { model } = require('mongoose')
const { Schema } = require('mongoose')

const User = model(
    'user',
    new Schema({
        username: { type: String, unique: true },
        password: String,
        type: { type: String, enum: ['admin', 'staff', 'customer'] },
        name: String,
        status: { type: Boolean, default: true },
    }),
    'user'
)

module.exports = User
