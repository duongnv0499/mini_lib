const Book = require('../../models/Book')

const getBooks = async req => {
    const { title, key, page, limit, available } = req.query
    const query = {}

    const vTitle = ((title || '') + '').trim()
    if (vTitle) query.title = { $regex: vTitle }
    const vAvailable = ((available || '') + '').trim().toLowerCase()
    if (vAvailable) query.available = vAvailable === '1' ? true : false
    const vPage = isNaN(page) ? 0 : +page < 0 ? 0 : +page
    const vLimit = isNaN(limit) ? 20 : +limit < 0 && +limit > 100 ? 20 : +limit
    const skip = vPage * vLimit

    return Book.aggregate([
        { $match: query },
        {
            $group: {
                _id: '$title',
                count: { $sum: 1 },
                title: { $first: '$title' },
                author: { $first: '$author' },
                banner: { $first: '$banner' },
                publisher: { $first: '$publisher' },
                categories: { $first: '$categories' },
                basePrice: { $first: '$basePrice' },
                _ids: { $push: '$_id' },
            },
        },
        { $skip: skip },
        { $limit: vLimit },
        {
            $lookup: {
                from: 'author',
                localField: 'author',
                foreignField: '_id',
                as: 'author',
            },
        },
        {
            $lookup: {
                from: 'category',
                localField: 'categories',
                foreignField: '_id',
                as: 'categories',
            },
        },
        {
            $lookup: {
                from: 'publisher',
                localField: 'publisher',
                foreignField: '_id',
                as: 'publisher',
            },
        },
    ])
}

module.exports = getBooks
