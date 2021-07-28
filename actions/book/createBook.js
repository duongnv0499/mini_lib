const Book = require('../../models/Book')
const Author = require('../../models/Author')
const Publisher = require('../../models/Publisher')
const Category = require('../../models/Category')

const createBookRefInfo = async (name, key) => {
    const models = {
        author: Author,
        category: Category,
        publisher: Publisher,
    }

    const Model = models[key]
    if (!Model) throw 'Invalid key'

    const existed = await Model.findOne({ name })
    if (existed) return existed

    const newRef = new Model({ name })
    return (await newRef.save()).toJSON()
}

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

    const vAuthor = await createBookRefInfo(author, 'author')
    const vPublisher = await createBookRefInfo(publisher, 'publisher')
    const vCategories = await createBookRefInfo(categories, 'category')

    const books = Array.from(Array(qty || 1)).map(
        () =>
            new Book({
                title,
                author: vAuthor,
                categories: [vCategories],
                basePrice,
                publisher: vPublisher,
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
