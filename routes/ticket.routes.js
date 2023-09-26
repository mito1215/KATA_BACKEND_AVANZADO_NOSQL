import { Router } from "express";
import { createTicket, deleteTicket, getTicket, getTicketId, updateticket } from "../controllers/ticket.controller.js";

export const ticketRouter = Router();

//GET
ticketRouter.get("/", getTicket);
//GET id
ticketRouter.get("/:id", getTicketId);
//POST
ticketRouter.post("/", createTicket);
//UPDATE
ticketRouter.patch("/:id", updateticket);
//DELETE
ticketRouter.delete("/:id", deleteTicket);