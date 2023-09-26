import express from "express";
import cors from "cors";
import 'dotenv/config.js'
import { errorHandler } from "./middleware/errorHanler.js";
import { dbConnection } from "./dataBase/db.js";
import { itemRouter } from "./routes/item.routes.js";
import { unknownEndpoint } from "./middleware/unknowEndPoint.js";

const server = express();
const PORT = process.env.PORT;

/*Transformar el cuerpo en peticion en un js */
server.use(express.json());

/*Permitir recibir solicitudes de clientes fuera de mi dominio */
server.use(cors());

/*Ruta Navegador para la tabla articulos*/
server.use("/api/v1/items", itemRouter);

//Ruta basica para probar que esta levantada la api
server.use(
    "/api/v1/welcome",
    (req, res) => res.status(200).json({message: 'Welcome to my api rest'}))

//Middleware: Cuando no se encuentra la ruta
server.use(unknownEndpoint);

//Errores de Usuario
server.use(errorHandler);

async function main() {
    await dbConnection();
    //Conectar servidor
    server.listen(PORT, () => {
        console.log(`Server run in http://localhost:${PORT}`);
    });
}

main();





