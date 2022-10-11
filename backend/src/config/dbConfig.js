const mongoose = require('mongoose')
const mongoUrlConnection = 'mongodb+srv://Curso:10879121@cluster0.z3gf8.mongodb.net/?retryWrites=true&w=majority'

const connectMongo = mongoose.connect(mongoUrlConnection)

module.exports = connectMongo