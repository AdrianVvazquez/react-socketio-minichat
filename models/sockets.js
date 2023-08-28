class Sockets {
    constructor(io) {
        this.io = io;
        this.socketEvents();
        // clients = {

        // }    
    }

    socketEvents() {
        // on connection
        this.io.on('connection', (socket) => { 
            // Se generará un nuevo id para el cliente al recargar la página. 'socket.id'
            // Escuchar eventos
            socket.on('message-client', (data) => {
                console.log(data);
                this.io.emit('message-from-server', data);
            });
        });
    }
}


module.exports = Sockets;