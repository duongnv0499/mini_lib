const BookCopy = require('../../models/BookCopy')
const createBookCopy = async req => {
    const { dueDate, checkout, book, customer, name } = req.body

    const bookCopy = new BookCopy({
        dueDate: new Date(dueDate),
        checkout: new Date(checkout),
        book,
        customer,
        name
    })

    return bookCopy.save()
}

module.exports = createBookCopy
