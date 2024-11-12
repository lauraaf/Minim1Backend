import { model,  Schema } from "mongoose";


export interface messageInterface{
    //messageID: string, *¿PONEMOS UNA ID NOSOTRAS O ESCOGEMOS LA QUE ASIGNA MONGO POR DEFECTO?* 
    author: Schema.Types.ObjectId,
    destinator: Schema.Types.ObjectId,
    mnsg: string,
    llegit: boolean
}

export type newMessageInfo = Omit<messageInterface,'id'>

export const messageSchema = new Schema<messageInterface>({
    author: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    destinator: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    mnsg: { type: String, required: true },
    llegit: {type: Boolean, default: false},
})

export const messageofDB = model<messageInterface>('message', messageSchema)