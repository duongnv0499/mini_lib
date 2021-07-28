const User = require('../../models/User')
const md5 = require('md5')
const jwt = require('jsonwebtoken')

const login = async req => {
    const { username, password } = req.body

    const user = await User.findOne({
        username,
        status: true,
    }).lean()

    if (!user) throw 'Invalid user'

    if ((user || {}).password !== md5(password)) throw 'Invalid password'

    const token = jwt.sign(user, 'abcd')

    return { token, user }
}

module.exports = login
