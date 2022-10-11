const Note = require('../models/Note')

exports.readPost = async (req, res) =>{
    try{
        const allNotes = await Note.find()

        return res.json(allNotes)
    }catch(error){
        return res.status(404).json({ error })
    }
}

exports.createPost = async (req, res) =>{
    const { title, desc, checked } = req.body

    if(!title || !desc){
        return res.status(400).json({ error: 'Há dados faltando' })
    }

    const note = new Note({
        title,
        desc,
        checked
    })

    try{
        const newNote = await note.save()

        return res.json(newNote)
    }catch(error){
        return res.status(404).json({ error })
    }
}

exports.deletePost = async (req, res) =>{
    const { id } = req.params

    try{
        const deletedNote = await Note.findByIdAndDelete(id)

        if(deletedNote){
            return res.json(deletedNote)
        }

        return res.status(401).json({ error: 'Nenhum dado encontrado para deletar.' })
    }catch(error){
        return res.status(404).json({ error })
    }
}