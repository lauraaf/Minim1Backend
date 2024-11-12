import { messageofDB } from "../models/message";

export const getEntries = {

    // Obtener todos los mensajes
    getAll: async()=>{
    return await messageofDB.find();
    },
    // Buscar mensajes por ID
    findById: async(id:string)=>{
        return await messageofDB.findById(id);
    },
    // Crear un nuevo mensaje
    create: async(entry:object)=>{
        return await messageofDB.create(entry);
    },
    // Actualizar un mensaje por ID
    update: async(id:string,body:object)=>{
        console.log(body);
        return await messageofDB.findByIdAndUpdate(id,body,{$new:true});
    },
    // Eliminar un mensaje por ID
    delete: async(id:string)=>{
        return await messageofDB.findByIdAndDelete(id);
    },
    
    //Obtener todos los mensajes de un destinatario
    findUnreadByDestinator: async(id:string)=>{ 
        return await messageofDB.find({ destinator: id}); 
    }
}