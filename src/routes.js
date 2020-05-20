const express = require('express')
const routes = express.Router()
const blogController = require('./controllers/blogController')


routes.get("/products", blogController.find)
routes.post("/products", blogController.create)
routes.put('/products/:id', blogController.update)
routes.delete('/products/:id', blogController.destroy)

module.exports = routes