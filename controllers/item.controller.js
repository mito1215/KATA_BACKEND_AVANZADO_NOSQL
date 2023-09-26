import { request, response } from "express";
import { Item } from "../models/item.model.js";

//Crear articulos - POST
export const createItem = async(request, response, next) => {
    try {
        const {nameItem, priceItem, stockItem} = request.body;

        const item = await Item.create({
            "nameItem": nameItem,
            "priceItem": priceItem,
            "stockItem": stockItem
        });
        response.json(item)
    } catch (error) {
        next(error);
    }
}

//Consultar comentarios - GET
export const getItem = async (request, response, next) => {
    try {
        console.log("Ingresando al controlador de comentarios ✔");
        const items = await Item.find({}, "nameItem priceItem stockItem").exec();
        //.populate("auth") se utiliza para usar como llave para relacionar con otra tabla
        response.status(200).json(items);
    } catch (error) {
        next(error);
    }
}

//Consultar comentarios por ID - GET
export const getItemId = async (request, response, next) => {
    //Utilizamos un trycatch para manejar el error cuando no se ingresa bien un id
    try {
        const id = request.params.id;
        const itemFound = await Item.findById(id).exec();

        if (!itemFound) {
            return response.status(404).end();
        }
        response.status(200).json(itemFound);
    } catch (error) {
        next(error);
    }
}

//Actualizar campos de articulos
export const updateItem = async(request, response, next) => {
    try {
        const id = request.params.id;
        const {nameItem, priceItem, stockItem} = request.body;
        
        const newBody = {
            "nameItem": nameItem,
            "priceItem": priceItem,
            "stockItem": stockItem
        }

        const item = await Item.findByIdAndUpdate(id, newBody, {new:true}).exec();
        response.status(200).json(item);
    } catch (error) {
        next(error);
    }
}

//Eliminar articulos - DELETE
export const deleteItem = async(request, response, next) =>{
    try {
        const id = request.params.id;
        const deleteItem = await Item.findByIdAndRemove(id).exec();

        if(!deleteItem) {
            return response.status(404).end();
        }
        response.status(204).end();
    } catch (error) {
        next(error);
    }
}
