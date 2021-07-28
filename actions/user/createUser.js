const User = require('../../models/User')
const md5 = require('md5')
const jwt = require('jsonwebtoken')

const createUser = async req => {
    const { username, password, type, name } = req.body

    if (!['staff', 'customer', 'admin'].includes(type)) throw 'Invalid type'

    const data = {
        type,
        username: ((username || '') + '').toLowerCase(),
        password: md5(password + ''),
        name: (name || '') + '',
    }

    const existed = await User.findOne({ username })
    if (existed) throw 'Existed username'

    const newUser = new User(data)

    const userData = (await newUser.save()).toJSON()

    return {
        user: userData,
        token: jwt.sign(userData, 'abcd'),
    }
}

module.exports = createUser
