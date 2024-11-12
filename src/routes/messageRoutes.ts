import express from 'express';
import { getMessages, getMessageByID, updateMessageByID, deleteMessage, createMessage, getDestinatorMessages} from "../controllers/messageController"
const messageRoutes = express.Router()

// Ruta para obtener todos los eventos
messageRoutes.get('/',getMessages )

// Ruta para obtener un evento por ID
messageRoutes.get('/getMessage/:id', getMessageByID )

// Ruta para crear un nuevo evento
messageRoutes.post('/', createMessage)

// Ruta para actualizar un evento por ID
messageRoutes.put('/:id', updateMessageByID)

// Ruta para eliminar un evento por ID
messageRoutes.delete('/:id', deleteMessage)

// Ruta para ontener todos los mensajes de un destinatario
messageRoutes.get('/getDestMessages/:id/', getDestinatorMessages)

export default messageRoutes  