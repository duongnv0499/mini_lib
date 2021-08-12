const BookCopy = require('../../models/Book')

const deleteBookCopy = async req => {
    const {
        id,
    } = req.body

    return BookCopy.deleteOne({_id: id})
}

module.exports = deleteBookCopy
