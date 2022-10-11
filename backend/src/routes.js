const express = require('express')
const routes = express.Router()
const noteController = require('./controllers/NoteController')
const checkController = require('./controllers/checkController')
const contentController = require('./controllers/contentController')

routes.get('/', noteController.readPost)
routes.post('/', noteController.createPost)
routes.delete('/:id', noteController.deletePost)

routes.get('/check', checkController.readFav)
routes.post('/check/:id', checkController.changeFav)

routes.post('/edit/:id', contentController.edit)

module.exports = routes