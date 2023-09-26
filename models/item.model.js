import mongoose from "mongoose";

//Crear SCHEMA o esquema de la tabla Articulos
const itemSchema = new mongoose.Schema({
    nameItem: {type: String, require: true},
    priceItem: {type: Number, require: true},
    stockItem: {type: Number, require: true}
});

export const Item = mongoose.model(
    "Item", 
    itemSchema
);