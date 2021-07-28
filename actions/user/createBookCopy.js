const BookCopy = require('../../models/BookCopy')
const createBookCopy = async req => {
    const { dueDate, checkout, book, customer } = req.body

    const bookCopy = new BookCopy({
        dueDate: new Date(dueDate),
        checkout: new Date(checkout),
        book,
        customer,
    })

    return bookCopy.save()
}

module.exports = createBookCopy
