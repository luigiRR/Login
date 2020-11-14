const mongoose = require('mongoose');
const { Schema } = mongoose;

const reservasSchema = new Schema ({
    fechaI: String,
    fechaF: String,
});

module.exports = mongoose.model('reservas', reservasSchema)