var db = require('../models')

module.exports = function (app) {
  // Get all examples
  app.get('/api/products', function (req, res) {
    db.Products.findAll({}).then(function (products) {
      res.json(products)
    })
  })

  app.get('/api/users', function (req, res) {
    db.Users.findAll({}).then((users) => {
      res.json(users)
    })
  })

  // Create a new example
  app.post('/api/products', function (req, res) {
    db.Products.create(req.body).then((newPost) => {
      res.json(newPost)
    })
  })

  app.post('/api/users', function (req, res) {
    db.Users.create(req.body).then((newPost) => {
      res.json(newPost)
    })
  })

  // Delete an example by id
  app.delete('/api/users/:id', function (req, res) {
    db.Users.destroy({ where: { id: req.params.id } }).then((result) => {
      res.json(result)
    })
  })
  app.delete('/api/products/:id', function (req, res) {
    db.Products.destroy({ where: { id: req.params.id } }).then((result) => {
      res.json(result)
    })
  })
}
