"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const messageController_1 = require("../controllers/messageController");
const messageRoutes = express_1.default.Router();
// Ruta para obtener todos los eventos
messageRoutes.get('/', messageController_1.getMessages);
// Ruta para obtener un evento por ID
messageRoutes.get('/getMessage/:id', messageController_1.getMessageByID);
// Ruta para crear un nuevo evento
messageRoutes.post('/', messageController_1.createMessage);
// Ruta para actualizar un evento por ID
messageRoutes.put('/:id', messageController_1.updateMessageByID);
// Ruta para eliminar un evento por ID
messageRoutes.delete('/:id', messageController_1.deleteMessage);
// Ruta para ontener todos los mensajes de un destinatario
messageRoutes.get('/getDestMessages/:id/', messageController_1.getDestinatorMessages);
exports.default = messageRoutes;
