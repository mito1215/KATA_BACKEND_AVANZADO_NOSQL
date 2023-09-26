import { Router } from "express";
import { createItem, deleteItem, getItem, getItemId, updateItem } from "../controllers/item.controller.js";

export const itemRouter = Router();

//GET
itemRouter.get("/", getItem);
//GET id
itemRouter.get("/:id", getItemId);
//POST
itemRouter.post("/", createItem);
//UPDATE
itemRouter.patch("/:id", updateItem);
//DELETE
itemRouter.delete("/:id", deleteItem);

