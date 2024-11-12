"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMessages = getMessages;
exports.getMessageByID = getMessageByID;
exports.createMessage = createMessage;
exports.updateMessageByID = updateMessageByID;
exports.deleteMessage = deleteMessage;
exports.getDestinatorMessages = getDestinatorMessages;
const messageServices = __importStar(require("../services/messageServices"));
function getMessages(_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("Get messages");
            const messages = yield messageServices.getEntries.getAll();
            console.log("messages", messages);
            return res.json(messages);
        }
        catch (error) {
            return res.status(500).json({ error: 'Failed to get messages' });
        }
    });
}
function getMessageByID(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log('Get message');
            const id = req.params.id;
            const message = yield messageServices.getEntries.findById(id);
            if (!message) {
                return res.status(404).json({ error: `Message with id ${id} not found` });
            }
            return res.json(message);
        }
        catch (error) {
            return res.status(500).json({ error: 'Failed to get message' });
        }
    });
}
function createMessage(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { author, destinator, mnsg } = req.body;
            // Creem un nou objecte Event
            const newMessage = {
                author,
                destinator,
                mnsg,
                llegit: false
            };
            // Creem el event
            const msg = yield messageServices.getEntries.create(newMessage);
            return res.json(msg);
        }
        catch (error) {
            return res.status(500).json({ error: 'Failed to create message' });
        }
    });
}
function updateMessageByID(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log('Get message by id');
            const id = req.params.id;
            const { author, destinator, mnsg, llegit } = req.body;
            const updatedMessage = { author, destinator, mnsg, llegit };
            const msg = yield messageServices.getEntries.update(id, updatedMessage);
            if (!msg) {
                return res.status(404).json({ error: `Message with id ${id} not found` });
            }
            return res.json(msg);
        }
        catch (error) {
            return res.status(500).json({ error: 'Failed to update message' });
        }
    });
}
function deleteMessage(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log('Delete message');
            const id = req.params.id;
            const msg = yield messageServices.getEntries.delete(id);
            if (!msg) {
                return res.status(404).json({ error: `Message with id ${id} not found` });
            }
            return res.json(msg);
        }
        catch (error) {
            return res.status(500).json({ error: 'Failed to get message' });
        }
    });
}
function getDestinatorMessages(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const idDestinator = req.params.id;
            console.log('Get messages of the user with id: ', idDestinator);
            const messages = yield messageServices.getEntries.findUnreadByDestinator(idDestinator);
            console.log(messages);
            if (!messages) {
                return res.status(404).json({ error: `User with id ${idDestinator} not found` });
            }
            // Filtrar los mensajes no leídos del array "messages" 
            const unreadMessages = messages.filter(message => message.llegit === false);
            return res.json(unreadMessages);
        }
        catch (error) {
            return res.status(500).json({ error: 'Failed to get messages' });
        }
    });
}
