const mongoose = require('mongoose');
const {Schema} = mongoose;

const NoteSchema = new Schema({
    name: {type: String , require: true},
    telefono: {type: String , require: true},
    address: {type: String , require: true},
    referencia1: {type: String , require: true},
    email: {type: String , require: true},
    dni: {type: String , require: true},
    facebook: {type: String , require: true},
    instagram: {type: String , require: true},
    tipo: {type: String , require: true},
    raza: {type: String , require: true},
    nombre: {type : String , require: true},
    sexo: {type: String , require: true},
    edad: {type :String , require: true},
    referencia2: {type: String , require: true},
    pregunta: {type: String , require: true},
    date: {type: Date , default: Date.now}
})

module.exports = mongoose.model('Note', NoteSchema)