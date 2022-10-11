const Note = require('../models/Note')

exports.readFav = async (req, res) =>{
    const { checked } = req.query

    try{
        const note = await Note.findOne({ checked: checked })

        return res.json(note)
    }catch(error){
        return res.status(404).json({ error })
    }
}

exports.changeFav = async (req, res) =>{
    const { id } = req.params

    try{
        const note = await Note.findOne({_id: id })

        if(note.checked){
            note.checked = false
        }else{
            note.checked = true
        }

        await note.save()

        return res.json(note)
    }catch(error){
        return res.status(404).json({ error })
    }
}