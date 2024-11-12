import pkg from "pg";
import dotenv from "dotenv";
import express from "express";
import { WebSocketServer as Server } from "ws";

// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

const { Pool } = pkg;
const app = express();
const PORT = process.env.PORT || 3000;
const WS_PORT = process.env.WS_PORT || 8080;

// Conexão com o banco de dados PostgreSQL
const db = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

// Testa a conexão com o banco
db.connect()
    .then(() => console.log("Conectado ao banco de dados PostgreSQL"))
    .catch((err) => console.error("Erro ao conectar ao banco de dados:", err));

// Configuração do WebSocket
const wss = new Server({ port: WS_PORT });
const clients = new Map();

wss.on("connection", (ws) => {
    console.log("Novo cliente conectado");

    ws.on("message", async (message) => {
        const data = JSON.parse(message);

        if (data.type === "join") {
            clients.set(ws, { id: data.id, role: data.role });
            broadcastConnectedUsers();
        } else if (data.type === "message") {
            sendMessage(data);
        }
    });

    ws.on("close", () => {
        clients.delete(ws);
        broadcastConnectedUsers();
    });
});

function broadcastConnectedUsers() {
    const connectedUsers = Array.from(clients.values());
    clients.forEach((client, ws) => {
        ws.send(JSON.stringify({ type: "connectedUsers", users: connectedUsers }));
    });
}

function sendMessage(data) {
    clients.forEach((client, ws) => {
        if (client.id === data.to || client.patients?.includes(data.to)) {
            ws.send(JSON.stringify({ type: "message", from: data.from, text: data.text }));
        }
    });
}

app.listen(PORT, () => {
    console.log(`Servidor HTTP rodando na porta ${PORT}`);
    console.log(`Servidor WebSocket rodando na porta ${WS_PORT}`);
});
