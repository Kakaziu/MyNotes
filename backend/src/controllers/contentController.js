const Note = require('../models/Note')

exports.edit = async (req, res) =>{
    const { desc } = req.body
    const { id } = req.params

    try{
        const note = await Note.findOne({ _id: id })

        if(note){
            note.desc = desc

            await note.save()

            return res.json(note)
        }
    }catch(error){
        return res.status(404).json({ error })
    }
}