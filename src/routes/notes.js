const express = require('express');
const router = express.Router();

const Note = require('../models/Note');

router.get('/notes/add', (req, res) => {
    res.render('note/new-note');
});

router.post('/note/new-note', async (req, res) => { 
    console.log(req.body);
    const newNote = new Note ({name, telefono, address, referencia1, email, dni, facebook, instagram, tipo, raza, nombre, sexo, edad, referencia2, pregunta});
    await newNote.save();
    res.redirect('/notes');
});

router.get('notes', (req, res) => {
    res.send('formularios');
});

module.exports = router;