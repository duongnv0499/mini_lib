const Book = require('../../models/Book')

const deleteBook = async req => {
    const {
        id,
    } = req.body

    return Book.deleteOne({_id: id})
}

module.exports = deleteBook
