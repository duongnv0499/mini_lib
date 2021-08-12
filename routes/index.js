const express = require('express')
const login = require('../actions/user/login')
const createUser = require('../actions/user/createUser')
const createBook = require('../actions/book/createBook')
const editBook = require('../actions/book/editBook')
const deleteBook = require('../actions/book/deleteBook')
const createBookRefInfo = require('../actions/book/createBookRefInfo')
const getBookRefInfo = require('../actions/book/getBookRefInfo')
const createBookCopy = require('../actions/user/createBookCopy')
const editBookCopy = require('../actions/user/editBookCopy')
const deleteBookCopy = require('../actions/user/deleteBookCopy')
const getBooks = require('../actions/book/getBooks')
const getDdc = require('../actions/book/getDdc')
const multer = require('multer')
const getBookCopy = require('../actions/user/getBookCopy')
const uploadFile = require('../actions/upload')
const router = express.Router()

const upload = multer({ dest: 'uploads/' })

const process = (req, res) => action => {
    action(req)
        .then(data => {
            res.json({
                success: true,
                data: data || {},
            })
        })
        .catch(e => {
            res.json({
                success: false,
                message: e.message || e,
            })
        })
}

router.get('/', (req, res) => process(req, res)(async () => 'Hello world'))
router.post('/user/login', (req, res) => process(req, res)(login))
router.post('/user/register', (req, res) => process(req, res)(createUser))
router.post('/user/bookCopy', (req, res) => process(req, res)(createBookCopy))
router.get('/user/bookCopy', (req, res) => process(req, res)(getBookCopy))

router.post('/book', (req, res) => process(req, res)(createBook))
router.get('/ddc', (req, res) => process(req, res)(getDdc))
router.get('/book', (req, res) => process(req, res)(getBooks))
router.post('/edit', (req, res) => process(req, res)(editBook))
router.post('/delete', (req, res) => process(req, res)(deleteBook))
router.post('/book/ref', (req, res) => process(req, res)(createBookRefInfo))
router.get('/book/ref', (req, res) => process(req, res)(getBookRefInfo))
router.patch('/user/bookCopy', (req, res) => process(req, res)(editBookCopy))
router.patch('/user/orderDelete', (req, res) => process(req, res)(deleteBookCopy))
router.post('/upload', upload.single('file'), (req, res) =>
    process(req, res)(uploadFile)
)
module.exports = router
