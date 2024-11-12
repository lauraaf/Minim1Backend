"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import * as eventServices from '../services/eventServices'
const eventController_1 = require("../controllers/eventController");
const eventRoutes = express_1.default.Router();
// Ruta para obtener todos los eventos
eventRoutes.get('/', eventController_1.getEvents);
// Ruta para obtener un evento por ID
eventRoutes.get('/:id', eventController_1.getEventByID);
// Ruta para crear un nuevo evento
eventRoutes.post('/', eventController_1.createEvent);
// Ruta para actualizar un evento por ID
eventRoutes.put('/:id', eventController_1.updateEventByID);
// Ruta para eliminar un evento por ID
eventRoutes.delete('/:id', eventController_1.deleteEvent);
exports.default = eventRoutes;
