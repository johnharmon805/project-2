var db = require('../models')

module.exports = function (app) {
  // app.get('/api/products', function (req, res) {
  //   db.Products.findAll({}).then(function (products) {
  //     console.log(JSON.stringify(products))
  //     res.render('shop', {
  //       data: JSON.stringify(products)
  //     })
  //   })
  // })
  // seeds the db with the bulkCreate method
  app.get('/bulk', function (req, res) {
    db.Products.bulkCreate([
      {
        product_name: 'Bounty',
        product_description: 'Paper Towel',
        product_category: 'Household',
        essential: true,
        image_url: '',
        price: 12.99,
        stock_quantity: 100
      },
      {
        product_name: 'Charmin',
        product_description: 'Toilet Paper',
        product_category: 'Household',
        essential: true,
        image_url: '',
        price: 12.99,
        stock_quantity: 100
      },
      {
        product_name: 'Hand Sanitizer',
        product_description: 'Hand Sanitizer',
        product_category: 'Household',
        essential: true,
        image_url: '',
        price: 7.99,
        stock_quantity: 100
      },
      {
        product_name: 'Face Mask',
        product_description: 'Face Mask',
        product_category: 'Household',
        essential: true,
        image_url: '',
        price: 4.99,
        stock_quantity: 100
      },
      {
        product_name: 'Alexa',
        product_description: 'Smart Speaker',
        product_category: 'Electronics',
        essential: false,
        image_url: '',
        price: 39.99,
        stock_quantity: 20
      },
      {
        product_name: 'Macbook Pro',
        product_description: 'Computer Laptop',
        product_category: 'Electronics',
        essential: false,
        image_url: '',
        price: 1200.00,
        stock_quantity: 10
      },
      {
        product_name: 'Yoga Mat',
        product_description: 'Yoga Mat',
        product_category: 'Sports and Fitness',
        essential: false,
        image_url: '',
        price: 27.99,
        stock_quantity: 100
      },
      {
        product_name: 'Baseball Bat',
        product_description: 'Baseball Team Sports',
        product_category: 'Sports and Fitness',
        essential: false,
        image_url: '',
        price: 9.99,
        stock_quantity: 100
      },
      {
        product_name: 'Kleenex',
        product_description: 'Tissue Paper',
        product_category: 'Household',
        essential: true,
        image_url: '',
        price: 4.99,
        stock_quantity: 10
      },
      {
        product_name: 'Bottled Water',
        product_description: 'Plastic Water Bottle',
        product_category: 'Pantry',
        essential: true,
        image_url: '',
        price: 4.99,
        stock_quantity: 100
      }
    ]).then(function (products) {
      res.json(products)
    })

    db.Users.bulkCreate([
      {
        name: 'Andrew',
        username: 'andrew',
        password: 'password'
      },
      {
        name: 'Monica',
        username: 'monica',
        password: 'password'
      },
      {
        name: 'Eliska',
        username: 'eliska',
        password: 'password'
      },
      {
        name: 'John',
        username: 'john',
        password: 'password'
      }
    ]).then(function (users) {
      res.json(users)
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
