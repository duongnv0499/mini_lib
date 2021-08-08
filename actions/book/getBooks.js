const Book = require('../../models/Book')

const getBooks = async req => {
    const { title, key, page, limit, available } = req.query
    const query = {}

    const vTitle = ((title || '') + '').trim()
    if (vTitle) query.title = { $regex: vTitle }
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
                quantity: { $first: '$quantity' },
                _ids: { $push: '$_id' },
            },
        },
        { $skip: skip },
        { $limit: vLimit },
    ])
}

module.exports = getBooks
