const BookCopy = require('../../models/BookCopy')

const getBookCopy = async req => {
    const { customer } = req.query
    const query = {}
    if (customer) query.customer = customer

    return BookCopy.find(query).populate('customer').populate('book')
}

module.exports = getBookCopy
