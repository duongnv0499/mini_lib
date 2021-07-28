const BookCopy = require('../../models/BookCopy')

module.exports = async req => {
    const { _id, ...data } = req.body

    return BookCopy.updateOne(
        {
            _id,
        },
        { $set: data }
    )
}
