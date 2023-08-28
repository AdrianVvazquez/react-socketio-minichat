const Server = require("./models/server");
require('dotenv').config();

const server = new Server();

server.execute();

/* 
    Run: nodemon index.js 
    Se agregó "dev" al package.json para usar el comando 'node run dev' y ejecutar nodemon
*/