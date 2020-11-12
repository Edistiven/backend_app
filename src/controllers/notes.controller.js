const notesController = {};

const Note = require('../models/Note');
const noteModel = require('../models/Note');

notesController.getNotes = async (req,res) =>{
    const notes =await Note.find();
    res.json(notes)
}

notesController.createNote = async(req, res) => {
    const { title,content, date, author } =req.body;
    const newNote = new Note({
        title,
        content,
        date,
        author
    })
    await newNote.save();
    res.json({message:'Nota Guardada'})

}

notesController.getNote = async(req, res) => {
    const note = await Note.findById(req.params.id );
    res.json(note)
}

notesController.updateNote = async(req, res) => {
    const {title,content,author} =req.body;
    await Note.findOneAndUpdate({_id : req.params.id},{
        title,
        content,
        author
    } )
    res.json({ message: 'Nota actualizada' })
}

notesController.deleteNote = async(req, res) => {
    await Note.findOneAndDelete(req.params.id);
    res.json({ message: 'Nota eliminada' })
}

module.exports =notesController;