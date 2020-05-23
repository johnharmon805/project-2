var db = require("../models");
var express = require("express");

module.exports = function(app) {
  // Get all examples
  app.get("/api/products", function(req, res) {
    db.products_tbs.findAll().then(function(products) {
      console.log("Did this get request run successfully at all?");
      console.log(products);
      res.json(products);
    });
  });

  app.get("/api/users", function(req, res) {
    db.users_tbs.findAll({}).then((users)=>{
      res.json(users);
    });
  });

  // Create a new example
  app.post("/api/products", function(req, res) {
    db.products_tbs.create(req.body).then((newPost)=>{
      res.json(newPost);
    });
  });

  app.post("/api/users", function(req, res) {
    db.users_tbs.create(req.body).then((newPost)=>{
      res.json(newPost);
    });
  });

  // Delete an example by id
  app.delete("/api/users/:id", function(req, res) {
    db.users_tbs.destroy({ where: { id: req.params.id } }).then((result)=>{
      res.json(result);
    });
  });
  app.delete("/api/products/:id", function(req, res) {
    db.products_tbs.destroy({ where: { id: req.params.id } }).then((result)=>{
      res.json(result);
    });
  });
};