const mongoose = require('mongoose');
const {Schema} = mongoose;

const NoteSchema = new Schema({
    name: String,
    telefono: String,
    address: String,
    referencia1: String,
    email:String,
    dni: String,
    facebook: String,
    instagram: String,
    tipo: String,
    raza: String,
    nombre: String,
    sexo: String,
    edad: String,
    referencia2: String,
    pregunta: String,
    date: {type: Date , default: Date.now}
})

module.exports = mongoose.model('Notes', NoteSchema)