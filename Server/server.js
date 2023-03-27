const path = require("path")
const express = require("express");
const http = require("http");
const socketio = require("socket.io");


const app = express();
const server = http.createServer(app);
const io = socketio(server);

// set a static folder
app.use(express.static(path.join(__dirname, 'public')));

// Runs When a client connects 

io.on('connection', socket =>{
    console.log("New Websocket Connection"); // when ever a client connects it will console log this 
    // emit events back and furth 
});// listen for some kind of event 

const PORT = 3000 || process.env.PORT;


server.listen(PORT, ()=> console.log(`server is running on ${PORT}`));