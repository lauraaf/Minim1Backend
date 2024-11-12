import { Request, Response } from "express";
import * as eventServices from '../services/eventServices'
import { eventInterface } from "../models/event";


export async function getEvents(_req: Request, res: Response): Promise<Response> {
    try {
     console.log("Get events");
     const events = await eventServices.getEntries.getAll();
     console.log("events", events);
     return res.json(events);
    } catch (error) {
     return res.status(500).json({ error:'Failed to get posts'});
    }
}

export async function getEventByID(req: Request, res: Response): Promise<Response> {
    try {
        console.log('Get event');
        const id = req.params.id;
        const event = await eventServices.getEntries.findById(id);

        if(!event) {
            return res.status(404).json({ error: `Event with id ${id} not found` });
        }
        return res.json(event);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to get event' });
    }
}

export async function createEvent(req: Request, res: Response): Promise<Response> {
    try {
       const { name, description, date, ubication, creator } = req.body as eventInterface;

       // Creem un nou objecte Event
       const newEvent: eventInterface = {
           name,
           description,
           date: date ? new Date(date) : new Date(),
           ubication, 
           creator,  
        };
 
       // Creem el event
       const event = await eventServices.getEntries.create(newEvent);
 
       return res.json({
           message: "Event created",
           event
       });
    } catch (error) {
       return res.status(500).json({ error: 'Failed to create event' }); 
    }
}

export async function updateEventByID(req: Request, res: Response): Promise<Response> {
    try{
        console.log('Get event by id');
        const id = req.params.id;
        const { name, description, date, ubication, creator } = req.body as eventInterface;
        const updatedEvent: Partial<eventInterface> = { name, description, date, ubication, creator };
        const event = await eventServices.getEntries.update(id, updatedEvent);
 
        if(!event) {
            return res.status(404).json({ error: `Event with id ${id} not found` });
        }
        return res.json({
            message: "Event updated",
            event
        });
    } catch (error) {
        return res.status(500).json({ error: 'Failed to update event' });
    }
}

export async function deleteEvent(req: Request, res: Response): Promise<Response> {
    try{
        console.log('Delete event');
        const id = req.params.id;
        const event = await eventServices.getEntries.delete(id);
 
        if (!event){
            return res.status(404).json({ error: 'Event with id ${id} not found' });
        }
        return res.json(event);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to get event' });
    }
}