import mongoose from "mongoose";

//Crear SCHEMA o esquema de la tabla Tickets
const ticketSchema = new mongoose.Schema({
    nameUser: {type: String, require: true},
    nameItem: {type: String, require: true},
    amountItem: {type: Number, require: true},
    subtotal: {type: Number, require: true},
    IVA: {type: Number, require: true},
    total: {type: Number, require: true}
});

export const Ticket = mongoose.model(
    "Ticket", 
    ticketSchema
);