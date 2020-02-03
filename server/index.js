const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 3000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const { addClient, removeClient, getClient, getClientRoom } = require('./clients');

app.use(router);

io.on('connection', (socket) => {
    console.log('Someone has connected');

    socket.on('join', ({ name, room }, callback) => {
        const { error, client } = addClient({ id: socket.id, name, room });
        if (error) return callback(error);
        socket.join(client.room);
        socket.emit('message', { user: 'admin', text: `${client.name}, welcome to room ${client.room}.` })
        socket.broadcast.to(client.room).emit('message', { user: 'admin', text: `${client.name} has joined the chat.` });

        callback();
    })

    socket.on('disconnect', () => {
        const client = removeClient(socket.id);
        if (client) {
            io.to(client.room).emit('message', { user: 'admin', text: `${client.name} has left the chat.` });
        }
    });

    socket.on('send-message', (message, callback) => {
        const client = getClient(socket.id);
        io.to(client.room).emit('message', { user: client.name, text: message });
        callback();
    })
})


server.listen(PORT, () => {
    console.log('Server is listening to port %s', PORT);
});