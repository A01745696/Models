const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema({
    id: { type: Number, required: true },
    mensaje: { type: String, required: true },
    usuario: { type: String, required: true },
    u_send : { type: Boolean, required: true },
    ayudante: { type: String, required: true },
    fecha: { type: Date, required: true }
  });

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
