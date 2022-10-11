const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    title: String,
    desc: String,
    checked: Boolean
})

const Note = mongoose.model('Note', noteSchema)

module.exports = Note