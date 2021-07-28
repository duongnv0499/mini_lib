const Author = require('../../models/Author')
const Publisher = require('../../models/Publisher')
const Category = require('../../models/Category')

const createBookRefInfo = async req => {
    const { name, key } = req.body
    const models = {
        author: Author,
        category: Category,
        publisher: Publisher,
    }

    const Model = models[key]
    if (!Model) throw 'Invalid key'

    const existed = await Model.findOne({ name })
    if (existed) return existed

    const newRef = new Model({ name })
    return (await newRef.save()).toJSON()
}

module.exports = createBookRefInfo
