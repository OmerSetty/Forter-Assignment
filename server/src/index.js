import express from 'express';
import httpServer from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import { index, search, advancedSearch, advancedSearchFussy } from './elastic-methods.js';
import { getAmountOfMatches, getMatch } from './utils.js';
import { getCurrentHourAndMinutes } from './utils.js';

const app = express();

app.use(cors());
const http = httpServer.createServer(app);

http.listen(3000, () => {
  console.log('listening on *:3000');
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

const SUGGESTIONS_AMOUNT = 3;

io.on('connection', (socket) => {
  console.log('new connection');
  io.emit('new connection', 'new connection');

  socket.on('send-message', async message => {
    socket.broadcast.emit('new-message', message);
    if (message.type === 'question') {
      let messageFromBot;
      try {
        const matchResult = await search('questions', message.content);
        console.log(matchResult.hits);
        const matchResultAmount = getAmountOfMatches(matchResult);
        if (matchResultAmount > 0) {
          const matchResultData = getMatch(matchResult)?.answer;
          messageFromBot = {
            type: 'answer-from-bot',
            content: matchResultData,
            question: message.content,
            time: getCurrentHourAndMinutes()
          };
        }
        else {
          const advancedSearchResult = await advancedSearchFussy('questions', message.content);
          const matchResultAmount = getAmountOfMatches(advancedSearchResult);
          if (matchResultAmount > 0) {
            const suggestions = [];
            for (let i = 0; i < Math.min(SUGGESTIONS_AMOUNT, matchResultAmount); i++) {
              suggestions.push(getMatch(advancedSearchResult, i)?.question);
            }
            messageFromBot = {
              type: 'suggestions-from-bot',
              content: 'I don\'t have the answer for this exact question. Please click on one of these similar questions if it fits your intention :)',
              suggestions: suggestions,
              question: message.content,
              time: getCurrentHourAndMinutes()
            };
          }
          else {
            messageFromBot = {
              type: 'no-answer-from-bot',
              content: 'Sadly, I don\'t know the ansewr yet...',
              question: message.content,
              time: getCurrentHourAndMinutes()
            };
          }
        }
      }
      catch (e) {
        console.log(e);
      }
      io.emit('new-message', messageFromBot);
    };
    if (message.type === 'answer') {
      const ducument = {
        question: message.question,
        answer: message.content
      };
      try {
        await index('questions', ducument);
      }
      catch (e) {
        console.log(e);
      }
    }
  });
});


