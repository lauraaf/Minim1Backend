import express from 'express';
//import * as eventServices from '../services/eventServices'
import {getEvents, getEventByID, createEvent, updateEventByID, deleteEvent} from '../controllers/eventController'


const eventRoutes = express.Router()

// Ruta para obtener todos los eventos
eventRoutes.get('/', getEvents)

// Ruta para obtener un evento por ID
eventRoutes.get('/:id', getEventByID)

// Ruta para crear un nuevo evento
eventRoutes.post('/', createEvent)

// Ruta para actualizar un evento por ID
eventRoutes.put('/:id', updateEventByID)

// Ruta para eliminar un evento por ID
eventRoutes.delete('/:id', deleteEvent)

export default eventRoutes  