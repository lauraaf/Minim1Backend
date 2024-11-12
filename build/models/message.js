"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageofDB = exports.messageSchema = void 0;
const mongoose_1 = require("mongoose");
exports.messageSchema = new mongoose_1.Schema({
    author: { type: mongoose_1.Schema.Types.ObjectId, ref: 'user', required: true },
    destinator: { type: mongoose_1.Schema.Types.ObjectId, ref: 'user', required: true },
    mnsg: { type: String, required: true },
    llegit: { type: Boolean, default: false },
});
exports.messageofDB = (0, mongoose_1.model)('message', exports.messageSchema);
