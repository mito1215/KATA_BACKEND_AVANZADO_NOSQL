import mongoose from "mongoose";

//Crear esquema de la tabla Ticket
const ticketShema = new mongoose.Schema({
    user: {String, require: true},
    items: {String, require: true},
    amout: {Number, require: true},
    subtotal: {Number, require: true},
    iva: {Number, require: true},
    total: {Number, require: true}
});

export const ticket = mongoose.model("item", ticketShema);