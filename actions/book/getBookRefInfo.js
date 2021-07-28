const Author = require('../../models/Author')
const Category = require('../../models/Category')
const Publisher = require('../../models/Publisher')

const getBookRefInfo = async req => {
    const { name, key, page, limit } = req.query

    const models = {
        author: Author,
        category: Category,
        publisher: Publisher,
    }

    const Model = models[key]
    if (!Model) throw 'Invalid key'

    const query = {}
    const vName = ((name || '') + '').trim()
    if (vName) query.name = { $regex: vName }
    const vPage = isNaN(page) ? 0 : +page < 0 ? 0 : +page
    const vLimit = isNaN(limit) ? 20 : +limit < 0 && +limit > 100 ? 20 : +limit
    const skip = vPage * vLimit

    const [rows, count] = await Promise.all([
        Model.find(query).skip(skip).limit(vLimit),
        Model.countDocuments(query),
    ])

    return { rows, count }
}

module.exports = getBookRefInfo
