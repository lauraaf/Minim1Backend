import { Request, Response } from "express";
import * as messageServices from "../services/messageServices"
import { messageInterface } from "../models/message";


export async function getMessages(_req: Request, res: Response): Promise<Response> {
    try {
     console.log("Get messages");
     const messages = await messageServices.getEntries.getAll();
     console.log("messages", messages);
     return res.json(messages);
    } catch (error) {
     return res.status(500).json({ error:'Failed to get messages'});
    }
}

export async function getMessageByID(req: Request, res: Response): Promise<Response> {
    try {
        console.log('Get message');
        const id = req.params.id;
        const message = await messageServices.getEntries.findById(id);

        if(!message) {
            return res.status(404).json({ error: `Message with id ${id} not found` });
        }
        return res.json(message);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to get message' });
    }
}

export async function createMessage(req: Request, res: Response): Promise<Response> {
    try {
       const { author, destinator, mnsg } = req.body as messageInterface;
       // Creem un nou objecte Event
       const newMessage: messageInterface = {
           author,
           destinator,
           mnsg,
           llegit: false 
        };
       // Creem el event
       const msg = await messageServices.getEntries.create(newMessage);
       return res.json(msg);
    } catch (error) {
       return res.status(500).json({ error: 'Failed to create message' }); 
    }
}

export async function updateMessageByID(req: Request, res: Response): Promise<Response> {
    try{
        console.log('Get message by id');
        const id = req.params.id;
        const { author, destinator, mnsg, llegit } = req.body as messageInterface;
        const updatedMessage: Partial<messageInterface> = { author, destinator, mnsg, llegit};
        const msg = await messageServices.getEntries.update(id, updatedMessage);
 
        if(!msg) {
            return res.status(404).json({ error: `Message with id ${id} not found` });
        }
        return res.json(msg);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to update message' });
    }
}

export async function deleteMessage(req: Request, res: Response): Promise<Response> {
    try{
        console.log('Delete message');
        const id = req.params.id;
        const msg = await messageServices.getEntries.delete(id);
        if (!msg){
            return res.status(404).json({ error: `Message with id ${id} not found` });
        }
        return res.json(msg);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to get message' });
    }
}

export async function getDestinatorMessages(req: Request, res: Response): Promise<Response> {
    try{
       const idDestinator = req.params.id;
       console.log('Get messages of the user with id: ', idDestinator);
       const messages = await messageServices.getEntries.findUnreadByDestinator(idDestinator);
       console.log(messages)
       if(!messages){
          return res.status(404).json({ error: `User with id ${idDestinator} not found` });
        }
        // Filtrar los mensajes no leídos del array "messages" 
        const unreadMessages = messages.filter(message => message.llegit === false);
       return res.json(unreadMessages)
    } catch (error) {
       return res.status(500).json({ error: 'Failed to get messages' });
    } 
}

