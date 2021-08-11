const Book = require('../../models/Book')

const createBook = async req => {
    const {
        title,
        author,
        categories,
        basePrice,
        quantity,
        publisher,
        addDate,
        info,
        image,
        ddc
    } = req.body

    const books =
        new Book({
            title,
            author,
            categories,
            basePrice,
            publisher,
            quantity,
            addDate,
            info,
            image,
            ddc
        })

    const existed = await Book.findOne({title: title, author: author, publisher: publisher})
    if (existed) {
        return null
    } else {
        await books.save(function (err, doc) {
            if (err) return console.error(err);
            console.log("New book added succussfully!");
        })
    }
}

module.exports = createBook
