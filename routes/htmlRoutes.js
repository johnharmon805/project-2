var db = require('../models')

module.exports = function (app) {
  // Load index page
  app.get('/', function (req, res) {
    db.Products.findAll({}).then(function (dbProducts) {
      res.render('home', {
        msg: 'Welcome!'
      })
    })
  })

  app.get('/shop', (req, res) => {
    db.Products.findAll({}).then((data) => {
      var productResults = {
        Products: data
      }
      res.render('shop', productResults)
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

  // Render 404 page for any unmatched routes
  app.get('*', function (req, res) {
    res.render('404')
  })
}
