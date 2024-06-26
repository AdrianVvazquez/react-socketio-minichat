const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const cors = require('cors');

const Sockets = require('./sockets');

// Sockets server
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // Http server
        this.server = http.createServer(this.app);

        // Sockets server config
        this.io = socketio(this.server, {/* Configuraciones */});
    }

    middlewares() {
        // Directorio public se usa con un middleware
        this.app.use(express.static(path.resolve(__dirname, '../public')));
        this.app.use(cors());   
    }

    configureSockets() {
        new Sockets(this.io);
    }
    
    execute() {
        // Inicializar middlewares
        this.middlewares();
        this.configureSockets();
        // Inicializar server
        this.server.listen(this.port, () => { 
            console.log("Server running on port", this.port);
        });

    }    
}

module.exports = Server;