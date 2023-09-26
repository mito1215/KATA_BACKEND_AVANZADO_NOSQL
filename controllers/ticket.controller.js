import { request, response } from "express";
import { Ticket } from "../models/ticket.model.js";

//Crear ticket - POST
export const createTicket = async(request, response, next) => {
    try {
        const {nameUser, nameItem, amountItem, subtotal, IVA, total} = request.body;

        const ticket = await Ticket.create({
            "nameUser": nameUser,
            "nameItem": nameItem,
            "amountItem": amountItem,
            "subtotal": subtotal,
            "IVA": IVA,
            "total": total
        });
        response.json(ticket)
    } catch (error) {
        next(error);
    }
}

//Consultar Tickets - GET
export const getTicket = async (request, response, next) => {
    try {
        console.log("Ingresando al controlador de Tickets ✔");
        const tickets = await Ticket.find({}, "nameUser nameItem amountItem subtotal IVA total").exec();
        //.populate("auth") se utiliza para usar como llave para relacionar con otra tabla
        response.status(200).json(tickets);
    } catch (error) {
        next(error);
    }
}

//Consultar ticket por ID - GET
export const getTicketId = async (request, response, next) => {
    //Utilizamos un trycatch para manejar el error cuando no se ingresa bien un id
    try {
        const id = request.params.id;
        const ticketFound = await Ticket.findById(id).exec();

        if (!ticketFound) {
            return response.status(404).end();
        }
        response.status(200).json(ticketFound);
    } catch (error) {
        next(error);
    }
}

//Actualizar campos de tickets
export const updateticket = async(request, response, next) => {
    try {
        const id = request.params.id;
        const {nameUser, nameItem, amountItem, subtotal, IVA, total} = request.body;
        
        const newBody = {
            "nameUser": nameUser,
            "nameItem": nameItem,
            "amountItem": amountItem,
            "subtotal": subtotal,
            "IVA": IVA,
            "total": total
        }

        const ticket = await Ticket.findByIdAndUpdate(id, newBody, {new:true}).exec();
        response.status(200).json(ticket);
    } catch (error) {
        next(error);
    }
}

//Eliminar Ticket - DELETE
export const deleteTicket = async(request, response, next) =>{
    try {
        const id = request.params.id;
        const deleteTicket = await Ticket.findByIdAndRemove(id).exec();

        if(!deleteTicket) {
            return response.status(404).end();
        }
        response.status(204).end();
    } catch (error) {
        next(error);
    }
}