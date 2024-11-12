"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const eventRoutes_1 = __importDefault(require("./routes/eventRoutes"));
const postRoutes_1 = __importDefault(require("./routes/postRoutes"));
const messageRoutes_1 = __importDefault(require("./routes/messageRoutes"));
const databaseConection_1 = require("./database/databaseConection");
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, databaseConection_1.run)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const PORT = 3000;
app.get('/ping', (_req, res) => {
    console.log('ping recivido correctamente');
    res.send('pinged');
});
app.use('/api/user', userRoutes_1.default);
app.use('/api/posts', postRoutes_1.default);
app.use('/api/events', eventRoutes_1.default);
app.use('/api/messages', messageRoutes_1.default);
app.listen(PORT, () => {
    console.log('el servidor esta escuchando en el puerto ' + PORT);
});
