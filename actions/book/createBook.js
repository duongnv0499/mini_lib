const Book = require('../../models/Book')

const createBook = async req => {
    const {
        title,
        qty,
        author,
        categories,
        basePrice,
        publisher,
        publishedDate,
        info,
    } = req.body

    const books = Array.from(Array(qty || 1)).map(
        () =>
            new Book({
                title,
                author,
                categories,
                basePrice,
                publisher,
                publishedDate,
                info,
            })
    )

    return Promise.all(
        books.map(async newBook => {
            return (await newBook.save()).toJSON()
        })
    )
}

module.exports = createBook
