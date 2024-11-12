"use strict";
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
exports.getEntries = void 0;
const message_1 = require("../models/message");
exports.getEntries = {
    // Obtener todos los mensajes
    getAll: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield message_1.messageofDB.find();
    }),
    // Buscar mensajes por ID
    findById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield message_1.messageofDB.findById(id);
    }),
    // Crear un nuevo mensaje
    create: (entry) => __awaiter(void 0, void 0, void 0, function* () {
        return yield message_1.messageofDB.create(entry);
    }),
    // Actualizar un mensaje por ID
    update: (id, body) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(body);
        return yield message_1.messageofDB.findByIdAndUpdate(id, body, { $new: true });
    }),
    // Eliminar un mensaje por ID
    delete: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield message_1.messageofDB.findByIdAndDelete(id);
    }),
    //Obtener todos los mensajes de un destinatario
    findUnreadByDestinator: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield message_1.messageofDB.find({ destinator: id });
    })
};
