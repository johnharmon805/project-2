var db = require('../models')

module.exports = function (app) {
    // Load index page
    app.get('/', function (req, res) {
        db.Products.findAll({}).then(function (dbExamples) {
            res.render('home', {
                msg: 'Welcome!',
                examples: dbExamples
            })
        })
    })

    // Cart Page
    app.get('/cart', function (req, res) {
        res.render('cart')
    })

    // Purchase Success Page
    app.get('/success', function (req, res) {
        res.render('Purchase-Success')
    })

    app.get('/shop', function (req, res) {
        db.Products.findAll({}).then((data) => {
            res.render('shop', { Products: data })
            console.log(data)
        })
    })
    // Load example page and pass in an example by id
    app.get('/example/:id', function (req, res) {
        db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
            res.render('example', {
                example: dbExample
            })
        })
    })

    // // Render 404 page for any unmatched routes
    // app.get('*', function (req, res) {
    //     res.render('404')
    // })
