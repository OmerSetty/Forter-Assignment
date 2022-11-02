import express from 'express';
import httpServer from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import { responseHandler, indexQuestion } from './handler.js';
import { greeting } from './bot-messages.js';

const app = express();

app.use(cors());
const http = httpServer.createServer(app);

http.listen(3001, () => {
  console.log('listening on *:3001');
});

const io = new Server(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true
  }
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

io.on('connection', (socket) => {
  console.log('new connection');

  io.emit('connections-amount', io.engine.clientsCount);
  io.to(socket.id).emit('greeting', greeting());

  socket.on('disconnect', () => {
    io.emit('connections-amount', io.engine.clientsCount);
  });

  socket.on('send-message', async message => {
    socket.broadcast.emit('new-message', message);

    if (message.type === 'question') {
      const messageFromBot = await responseHandler(message.content, message.id);
      io.emit('new-message', messageFromBot);
    }
    else if (message.type === 'answer') {
      await indexQuestion(message.question, message.content);
    }
  });
});


