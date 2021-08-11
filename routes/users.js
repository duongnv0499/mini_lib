var express = require('express')
var router = express.Router()
router.get('/', function (req, res, next) {
    res.render('index.html')
})
router.get('/login', function (req, res, next) {
    res.render('login.html')
})
router.get('/register', function (req, res, next) {
    res.render('register.html')
})
router.get('/admin', function (req, res, next) {
    res.render('admin.html')
})
router.get('/admin/new', function (req, res, next) {
    res.render('newbook.html')
})
router.get('/admin/history', function (req, res, next) {
    res.render('history.html')
})
router.get('/admin/order', function (req, res, next) {
    res.render('order.html')
})
router.get('/admin/edit', function (req, res, next) {
    res.render('edit.html')
})
router.get('/customer', function (req, res, next) {
    res.render('customer.html')
})
router.get('/customer/order', function (req, res, next) {
    res.render('orderbook.html')
})

router.get('/test', (req, res) => res.render('test.html'))

module.exports = router
