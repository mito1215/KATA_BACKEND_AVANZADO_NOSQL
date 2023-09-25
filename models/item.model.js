import mongoose from "mongoose";

//Crear esquema de la tabla Articulo
const itemShema = new mongoose.Schema({
    name: {String, require: true},
    price: {Number, require: true},
    stock: {Number, require: true}
});

export const item = mongoose.model("item", itemShema);