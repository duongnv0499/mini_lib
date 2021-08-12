const Book = require('../../models/Book')

const editBook = async req => {
    console.log(req)
    const {
        id,
        title,
        author,
        categories,
        publisher,
        basePrice,
        quantity,
        info,
        image,
        ddc
    } = req.body

    // const existed = await Book.findOne({_id: id})
    // if (!existed) {
    //     return null
    // } else return null
    return Book.findOneAndUpdate({_id: id}, {
        title: title,
        author: author,
        quantity: quantity,
        categories: categories,
        basePrice: basePrice,
        publisher: publisher,
        info: info,
        image: image,
        ddc: ddc,
    });
}

module.exports = editBook
